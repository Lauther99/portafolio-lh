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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();
  const pendingHref = useRef<string | null>(null);
  const busy = useRef(false);

  const navigate = async (href: string) => {
    if (busy.current) return;
    busy.current = true;
    setIsTransitioning(true);
    pendingHref.current = href;

    // 1. Capture while page is still visible (no black screen)
    let dataUrl = "";
    try {
      const domtoimage = (await import("dom-to-image-more")).default;
      dataUrl = await domtoimage.toJpeg(document.body, {
        quality: 0.8,
        scale: 0.8,
        filter: (node: Node) => (node as Element).tagName !== "CANVAS",
      });
    } catch {
      dataUrl = "";
    }

    // 2. Show canvas with texture already ready — no black period
    const el = document.getElementById("transition-canvas") as HTMLCanvasElement | null;
    if (el) el.style.display = "block";
    setScreenshot(dataUrl);
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
    setIsTransitioning(false);
  };

  return (
    <TransitionContext.Provider value={{ isTransitioning, navigate }}>
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
