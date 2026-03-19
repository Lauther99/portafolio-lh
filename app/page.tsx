"use client";

import { NavHint } from "@/components/layout/nav-hint";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-20 pb-24 md:pt-0 md:pb-0">
      <NavHint />
      {/* Available badge */}
      <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6 md:mb-8">
        <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
        <span className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase font-medium">
          Disponible para proyectos
        </span>
      </div>

      {/* Name - massive display text */}
      <h1 className="leading-[0.9] font-black uppercase tracking-tight cursor-default">
        <span className="block text-white text-[clamp(2.2rem,9vw,13rem)] font-sans tracking-[-0.1rem]">
          Lauther
        </span>
        <span className="block text-brand text-[clamp(2.2rem,9vw,13rem)]">
          Valladares
        </span>
      </h1>

      {/* Description */}
      <p className="mt-5 md:mt-8 max-w-lg text-muted-foreground text-sm md:text-lg">
        Ingeniero de software enfocado en{" "}
        <strong className="text-white font-semibold">
          desarrollo web y sistemas con IA
        </strong>
        . Desarrollo aplicaciones modernas con React y Next.js, además de
        agentes inteligentes y herramientas basadas en modelos de lenguaje.
      </p>
    </main>
  );
}
