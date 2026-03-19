"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { sections } from "@/lib/sections";
import { useTransition } from "@/context/transition-context";
import { cn } from "@/lib/utils";

const ANGLES = [170, 120, 60, 10];

const xy = {
  170: {x: -100, y: 30},
  120: {x: -60, y: -30},
  60: {x: 60, y: -30},
  10: {x: 100, y: 30},
};

export function ArcNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { navigate, isTransitioning } = useTransition();

  const currentSection = sections.find((s) => s.href === pathname);

  const slug = pathname.split("/")[2];
  const slugLabel = slug
    ? slug.split("-").map((w) => w[0].toUpperCase()).slice(0, 4).join("")
    : "";

  return (
    <div
      className="pointer-events-auto"
      onMouseLeave={() => setOpen(false)}
    >
      {/* Container — tall enough to keep hover active while mouse moves to arc items */}
      <div className="relative" style={{ width: open ? 320 : 130, height: open ? 120 : 65 }}>
        {/* Radial dark backdrop */}
        <AnimatePresence>
          {open && (
            <motion.div
              className="absolute pointer-events-none"
              style={{
                left: "50%",
                bottom: 0,
                width: 340,
                height: 240,
                transform: "translateX(-50%)",

                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",

                background:
                  "radial-gradient(ellipse 70% 80% at 50% 100%, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.5) 55%, transparent 100%)",

                maskImage:
                  "radial-gradient(ellipse 70% 80% at 50% 100%, black 0%, black 55%, transparent 100%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 70% 80% at 50% 100%, black 0%, black 55%, transparent 100%)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </AnimatePresence>

        {/* Arc items */}
        <AnimatePresence>
          {open &&
            sections.map((section, i) => {
              const { x, y } = xy[ANGLES[i] as keyof typeof xy];
              const isActive = pathname === section.href;

              return (
                <motion.button
                  key={section.href}
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 group cursor-pointer"
                  style={{ left: "50%", bottom: 32 }}
                  initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                  animate={{ x, y, opacity: 1, scale: 1 }}
                  exit={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 22,
                    delay: i * 0.06,
                  }}
                  onClick={() => {
                    if (pathname !== section.href && !isTransitioning) {
                      navigate(section.href);
                      setOpen(false);
                    }
                  }}
                >
                  <span
                    className={cn(
                      "text-[10px] tracking-[0.25em] uppercase transition-colors duration-200 select-none",
                      isActive
                        ? "text-brand"
                        : "text-white/50 group-hover:text-white",
                    )}
                  >
                    {section.label}
                  </span>

                  <div
                    className={cn(
                      "rounded-full transition-all duration-200",
                      isActive
                        ? "w-3 h-3 bg-brand shadow-[0_0_10px_hsl(var(--brand)/0.6)]"
                        : "w-2.5 h-2.5 bg-white/35 group-hover:bg-white/80 group-hover:scale-110",
                    )}
                  />
                </motion.button>
              );
            })}
        </AnimatePresence>

        {/* Trigger — semicircle with current page name */}
        <div
          onMouseEnter={() => setOpen(true)}
          onClick={() => setOpen(!open)}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center cursor-default select-none transition-colors duration-300 backdrop-blur-[10px]"
          style={{
            width: 130,
            height: 65,
            borderRadius: "65px 65px 0 0",
            background: open ? "rgba(0,0,0,0.75)" : "rgba(0,0,0,0.5)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderBottom: "none",
          }}
        >
          <span className="text-[10px] tracking-[0.25em] uppercase text-white/50">
            {currentSection?.label ?? slugLabel}
          </span>
        </div>
      </div>
    </div>
  );
}
