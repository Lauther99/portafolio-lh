"use client";

import { createContext, useContext, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { PageTransitionOverlay } from "@/components/layout/page-transition";

type TransitionContextType = {
  isTransitioning: boolean;
  navigate: (href: string) => void;
};

const TransitionContext = createContext<TransitionContextType>({
  isTransitioning: false,
  navigate: () => {},
});

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const router = useRouter();
  const pendingHref = useRef<string | null>(null);
  const busy = useRef(false);

  const navigate = async (href: string) => {
    if (busy.current) return;
    busy.current = true;
    pendingHref.current = href;

    // 1. Show Three.js canvas INSTANTLY via direct DOM (no React cycle delay)
    const el = document.getElementById("transition-canvas") as HTMLCanvasElement | null;
    if (el) el.style.display = "block";

    // 2. Wait 2 frames — canvas paints solid background, hiding any DOM artifacts
    await new Promise<void>((r) => requestAnimationFrame(() => { requestAnimationFrame(() => r()); }));

    // 3. Capture page behind the opaque canvas
    try {
      const domtoimage = (await import("dom-to-image-more")).default;
      const dataUrl = await domtoimage.toJpeg(document.body, {
        quality: 0.95,
        scale: 1,
        filter: (node: Node) => (node as Element).tagName !== "CANVAS",
      });
      setScreenshot(dataUrl);
    } catch {
      setScreenshot(""); // empty string = ready but no texture
    }
  };

  const onCoverComplete = () => {
    if (pendingHref.current) {
      router.push(pendingHref.current);
      pendingHref.current = null;
    }
  };

  const onRevealComplete = () => {
    setScreenshot(null);
    busy.current = false;
  };

  return (
    <TransitionContext.Provider value={{ isTransitioning: busy.current, navigate }}>
      {children}
      <PageTransitionOverlay
        screenshot={screenshot}
        onCoverComplete={onCoverComplete}
        onRevealComplete={onRevealComplete}
      />
    </TransitionContext.Provider>
  );
}

export function useTransition() {
  return useContext(TransitionContext);
}
