"use client";

import Link from "next/link";
import { Code2 } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 transition-all duration-300 ${
        scrolled
          ? "md:bg-transparent md:backdrop-blur-none bg-background/70 backdrop-blur-md border-b border-white/8"
          : ""
      }`}
    >
      {/* Left: logo mark + name */}
      <Link href="/" className="flex items-center gap-3">
        <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-brand">
          <Code2 size={18} className="text-white" />
        </div>
        <span className="text-white font-semibold text-sm tracking-widest">
          LV
        </span>
      </Link>

      {/* Right: CTA */}
      <div className="flex items-center gap-6">
        <Link
          href="/contacto"
          className="bg-brand text-white rounded-full px-6 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Hire Me
        </Link>
      </div>
    </nav>
  );
}
