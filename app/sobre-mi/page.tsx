"use client";

import { TransitionLink } from "@/components/ui/transition-link";

export default function SobreMi() {
  return (
    <main className="h-screen flex flex-col justify-center px-16 md:px-24 lg:px-32 pt-24 pb-16 max-w-[1400px] m-auto">
      {/* Badge */}
      <div className="flex items-center gap-2 w-fit px-4 py-2 rounded-full border border-white/15 bg-white/5 mb-8">
        <span className="w-1.5 h-1.5 rounded-full bg-brand" />
        <span className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase font-medium">
          Digital Craftsman
        </span>
      </div>

      {/* Headline */}
      <h1 className="font-black text-[clamp(2.5rem,5.5vw,6.5rem)] leading-[1.05] mb-6 cursor-default">
        <span className="block">
          <span className="text-white">Bridging </span>
          <span className="text-brand italic">Design</span>
          <span className="text-white"> &</span>
        </span>
        <span className="block">
          <span className="text-white">Functional </span>
          <span className="text-brand italic">Excellence</span>
          <span className="text-white">.</span>
        </span>
      </h1>

      {/* Description */}
      <p className="max-w-md text-muted-foreground text-base leading-relaxed mb-10 cursor-default">
        Web Developer focused on bridging design and functionality with
        high-performance code. Lauther Valladares delivers seamless digital
        experiences through modern frameworks and a meticulous eye for
        interaction design.
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4">
        <TransitionLink
          href="/proyectos"
          className="flex items-center justify-center gap-2 w-fit px-8 py-4 bg-brand text-white rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          See Projects →
        </TransitionLink>
        <TransitionLink
          href="/contacto"
          className="flex items-center justify-center gap-2 w-fit px-8 py-4 border border-white/20 text-white rounded-xl font-semibold text-sm hover:bg-white/5 transition-colors"
        >
          My Stack
        </TransitionLink>
      </div>
    </main>
  );
}
