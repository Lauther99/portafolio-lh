"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import * as THREE from "three";

/* ─── Grid ─────────────────────────────────────────────── */
const COLS  = 8;
const ROWS  = 5;
const TOTAL = COLS * ROWS;
const DEPTH = 45; // block thickness (px in ortho space)

/* ─── Timing (seconds) ─────────────────────────────────── */
const COVER_DUR  = 0.34;
const COVER_STEP = 0.04;   // diagonal stagger
const REVEAL_STEP = 0.035; // reverse diagonal stagger
const FADE_DUR   = 0.40;
const GRAVITY    = 2600;   // px / s²

/* ─── Block face colors (dark navy palette) ─────────────── */
const C_RIGHT  = 0x2a2a2a;
const C_LEFT   = 0x1a1a1a;
const C_TOP    = 0x333333;
const C_BOTTOM = 0x111111;
const C_BACK   = 0x1a1a1a;

/* ─── BoxGeometry UV offset for front face (+Z, group 4) ── */
const FRONT_UV = 16;

/* ─── Types ─────────────────────────────────────────────── */
type TileData = {
  mesh:       THREE.Mesh;
  materials:  THREE.MeshBasicMaterial[];
  homeX:      number;
  homeY:      number;
  startY:     number;
  coverDelay: number;
  revealDelay:number;
  vy: number; vx: number;
  rotVx: number; rotVy: number; rotVz: number;
  coverDone:  boolean;
  revealDone: boolean;
};

type Props = {
  screenshot:       string | null;
  onCoverComplete:  () => void;
  onRevealComplete: () => void;
};

/* ─── Component ─────────────────────────────────────────── */
export function PageTransitionOverlay({ screenshot, onCoverComplete, onRevealComplete }: Props) {
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const rendererRef  = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef     = useRef<THREE.Scene | null>(null);
  const cameraRef    = useRef<THREE.OrthographicCamera | null>(null);
  const tilesRef     = useRef<TileData[]>([]);
  const animRef      = useRef<number>(0);
  const phaseRef     = useRef<"covering" | "revealing" | "idle">("idle");
  const phaseStartRef = useRef(0);
  const lastTimeRef   = useRef(0);
  const coverFiredRef  = useRef(false);
  const revealFiredRef = useRef(false);

  const onCoverRef  = useRef(onCoverComplete);
  const onRevealRef = useRef(onRevealComplete);
  useLayoutEffect(() => {
    onCoverRef.current  = onCoverComplete;
    onRevealRef.current = onRevealComplete;
  });

  /* ── Init Three.js once ───────────────────────────────── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const w = window.innerWidth;
    const h = window.innerHeight;

    // alpha:false + opaque clear = canvas is solid dark the moment it appears
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: false, antialias: false });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 1);
    rendererRef.current = renderer;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.OrthographicCamera(-w / 2, w / 2, h / 2, -h / 2, 0.1, 2000);
    camera.position.z = 500;
    cameraRef.current = camera;

    // Paint once immediately so the canvas is opaque the instant it's shown
    renderer.render(scene, camera);

    return () => { renderer.dispose(); };
  }, []);

  /* ── Start animation when screenshot arrives ──────────── */
  useEffect(() => {
    if (screenshot === null) return; // null = "not started"; "" or url = "ready"

    const scene    = sceneRef.current;
    const renderer = rendererRef.current;
    const camera   = cameraRef.current;
    if (!scene || !renderer || !camera) return;

    const w = window.innerWidth;
    const h = window.innerHeight;
    const tileW = w / COLS;
    const tileH = h / ROWS;

    /* Clean up previous tiles */
    tilesRef.current.forEach((t) => {
      scene.remove(t.mesh);
      t.mesh.geometry.dispose();
      t.materials.forEach((m) => m.dispose());
    });
    tilesRef.current = [];

    /* Load screenshot texture */
    let texture: THREE.Texture | null = null;
    if (screenshot) {
      texture = new THREE.TextureLoader().load(screenshot);
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
    }

    /* Build tiles */
    const maxDiag = (ROWS - 1) + (COLS - 1);

    for (let i = 0; i < TOTAL; i++) {
      const col = i % COLS;
      const row = Math.floor(i / COLS);

      const geometry = new THREE.BoxGeometry(tileW, tileH, DEPTH);

      /* Remap front face (+Z) UVs to this tile's slice of the screenshot */
      if (texture) {
        const u1 = col / COLS,       u2 = (col + 1) / COLS;
        const v1 = 1 - (row+1)/ROWS, v2 = 1 - row / ROWS;
        const uv = geometry.attributes.uv as THREE.BufferAttribute;
        uv.setXY(FRONT_UV,     u1, v2); // TL
        uv.setXY(FRONT_UV + 1, u2, v2); // TR
        uv.setXY(FRONT_UV + 2, u1, v1); // BL
        uv.setXY(FRONT_UV + 3, u2, v1); // BR
        uv.needsUpdate = true;
      }

      const makeMat = (color: number) =>
        new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 1 });

      const frontMat = new THREE.MeshBasicMaterial({
        map:         texture,
        color:       texture ? 0xffffff : 0x162050,
        transparent: true,
        opacity:     1,
      });

      const materials = [
        makeMat(C_RIGHT),  // +X
        makeMat(C_LEFT),   // -X
        makeMat(C_TOP),    // +Y
        makeMat(C_BOTTOM), // -Y
        frontMat,          // +Z  ← screenshot face
        makeMat(C_BACK),   // -Z
      ];

      const mesh = new THREE.Mesh(geometry, materials);
      mesh.visible = true;

      const homeX  = -w / 2 + (col + 0.5) * tileW;
      const homeY  =  h / 2 - (row + 0.5) * tileH;
      const startY =  h / 2 + tileH * 2;

      mesh.position.set(homeX, homeY, 0);
      scene.add(mesh);

      // Reverse diagonal: bottom-right falls first (delay = 0), top-left falls last
      const revealDelay = (maxDiag - (row + col)) * REVEAL_STEP;

      tilesRef.current.push({
        mesh, materials,
        homeX, homeY, startY,
        coverDelay:  (row + col) * COVER_STEP,
        revealDelay,
        vy: 0,
        vx: (Math.random() - 0.5) * 100,
        rotVx: (Math.random() - 0.5) * Math.PI * 3,
        rotVy: (Math.random() - 0.5) * Math.PI * 3,
        rotVz: (Math.random() - 0.5) * Math.PI * 2,
        coverDone:  true,
        revealDone: false,
      });
    }

    /* Reset phase — skip cover, fire immediately and go to reveal */
    coverFiredRef.current  = true;
    revealFiredRef.current = false;
    onCoverRef.current();
    phaseRef.current      = "revealing";
    phaseStartRef.current = performance.now();
    lastTimeRef.current   = performance.now();

    /* ── Animation loop ───────────────────────────────── */
    function animate() {
      animRef.current = requestAnimationFrame(animate);

      const now     = performance.now();
      const dt      = Math.min((now - lastTimeRef.current) / 1000, 0.05);
      lastTimeRef.current = now;
      const elapsed = (now - phaseStartRef.current) / 1000;

      /* COVER — tiles fall from above in diagonal wave */
      if (phaseRef.current === "covering") {
        let allDone = true;

        tilesRef.current.forEach((tile) => {
          if (tile.coverDone) return;
          const t = elapsed - tile.coverDelay;
          if (t < 0) { allDone = false; return; }

          tile.mesh.visible = true;
          const p     = Math.min(t / COVER_DUR, 1);
          const eased = p * p; // ease-in (gravity feel)

          tile.mesh.position.y = tile.startY + (tile.homeY - tile.startY) * eased;
          tile.mesh.position.x = tile.homeX;
          tile.mesh.rotation.set(0, 0, 0);
          setOpacity(tile.materials, 1);

          if (p >= 1) {
            tile.mesh.position.y = tile.homeY;
            tile.coverDone = true;
          } else {
            allDone = false;
          }
        });

        if (allDone && !coverFiredRef.current) {
          coverFiredRef.current = true;
          setTimeout(() => {
            onCoverRef.current();
            phaseRef.current      = "revealing";
            phaseStartRef.current = performance.now();
            lastTimeRef.current   = performance.now();
          }, 80);
        }

      /* REVEAL — tiles fall out reverse diagonal, tumble + fade */
      } else if (phaseRef.current === "revealing") {
        let allDone = true;

        tilesRef.current.forEach((tile) => {
          if (tile.revealDone) return;
          const t = elapsed - tile.revealDelay;
          if (t < 0) { allDone = false; return; }

          // Physics
          tile.vy += GRAVITY * dt;
          tile.mesh.position.y -= tile.vy * dt;
          tile.mesh.position.x += tile.vx * dt;
          tile.mesh.rotation.x += tile.rotVx * dt;
          tile.mesh.rotation.y += tile.rotVy * dt;
          tile.mesh.rotation.z += tile.rotVz * dt;

          // Fade
          const fade = Math.min(t / FADE_DUR, 1);
          setOpacity(tile.materials, 1 - fade);

          if (fade >= 1) {
            tile.mesh.visible  = false;
            tile.revealDone    = true;
          } else {
            allDone = false;
          }
        });

        if (allDone && !revealFiredRef.current) {
          revealFiredRef.current = true;
          cancelAnimationFrame(animRef.current);

          // Cleanup
          tilesRef.current.forEach((t) => {
            scene!.remove(t.mesh);
            t.mesh.geometry.dispose();
            t.materials.forEach((m) => m.dispose());
          });
          tilesRef.current = [];
          phaseRef.current = "idle";

          // Hide canvas
          const el = canvasRef.current;
          if (el) el.style.display = "none";

          onRevealRef.current();
          return;
        }
      }

      renderer!.render(scene!, camera!);
    }

    cancelAnimationFrame(animRef.current);
    animate();

    return () => { cancelAnimationFrame(animRef.current); };
  }, [screenshot]);

  return (
    <canvas
      id="transition-canvas"
      ref={canvasRef}
      className="fixed inset-0 z-[9999] pointer-events-none"
      style={{ display: "none" }}
    />
  );
}

/* ─── Helpers ───────────────────────────────────────────── */
function setOpacity(materials: THREE.MeshBasicMaterial[], opacity: number) {
  for (const m of materials) m.opacity = opacity;
}
