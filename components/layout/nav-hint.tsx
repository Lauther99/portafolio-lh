"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function NavHint() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Small delay so it appears after the page load animation
    const show = setTimeout(() => setVisible(true), 200);
    const hide = setTimeout(() => setVisible(false), 15200); // 12s visible
    return () => {
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Top arrows + label — above the nav */}
          <motion.div
            className="fixed bottom-[72px] left-1/2 -translate-x-1/2 pointer-events-none z-40 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1.2, ease: "easeInOut" } }}
            transition={{ duration: 0.8 }}
          >
            {/* Label */}
            <motion.span
              className="text-[9px] tracking-[0.28em] uppercase text-white/35 select-none"
              animate={{ opacity: [0.35, 0.7, 0.35] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            >
              navega
            </motion.span>

            {/* Arrows — 4 total, outer pair bounces slightly after inner */}
            <div className="flex gap-4 items-start">
              {/* Inner-left */}
              <motion.svg
                width="30" height="52" viewBox="0 0 30 52" fill="none"
                className="opacity-55"
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0 }}
              >
                <path d="M 6,4 C 1,16 7,30 18,46" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M 18,46 L 10,37 M 18,46 L 22,35" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </motion.svg>

              {/* Inner-right */}
              <motion.svg
                width="30" height="52" viewBox="0 0 30 52" fill="none"
                className="opacity-55"
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0 }}
              >
                <path d="M 24,4 C 29,16 23,30 12,46" stroke="var(--brand)" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M 12,46 L 8,35 M 12,46 L 20,37" stroke="var(--brand)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </motion.svg>

            </div>
          </motion.div>

          {/* Side-left arrow — pointing right toward the nav */}
          <motion.svg
            className="fixed pointer-events-none z-40 opacity-50"
            style={{ bottom: 20, left: "calc(50% - 110px)" }}
            width="48" height="28" viewBox="0 0 48 28" fill="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5, x: [0, -6, 0] }}
            exit={{ opacity: 0, transition: { duration: 1.2 } }}
            transition={{ opacity: { duration: 0.8 }, x: { duration: 1.8, repeat: Infinity, ease: "easeInOut" } }}
          >
            <path d="M 6,14 C 16,8 28,10 42,14" stroke="var(--brand)" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 42,14 L 32,8 M 42,14 L 32,20" stroke="var(--brand)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>

          {/* Side-right arrow — pointing left toward the nav */}
          <motion.svg
            className="fixed pointer-events-none z-40 opacity-50"
            style={{ bottom: 20, left: "calc(50% + 62px)" }}
            width="48" height="28" viewBox="0 0 48 28" fill="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5, x: [0, 6, 0] }}
            exit={{ opacity: 0, transition: { duration: 1.2 } }}
            transition={{ opacity: { duration: 0.8 }, x: { duration: 1.8, repeat: Infinity, ease: "easeInOut" } }}
          >
            <path d="M 42,14 C 32,8 20,10 6,14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 6,14 L 16,8 M 6,14 L 16,20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>
        </>
      )}
    </AnimatePresence>
  );
}
