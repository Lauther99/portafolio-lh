"use client";

import { TransitionLink } from "@/components/ui/transition-link";

export default function SobreMi() {
  return (
    <main className="min-h-screen flex items-center px-6 sm:px-16 md:px-24 lg:px-32 pt-28 md:pt-20 pb-16 max-w-[1400px] m-auto">
      <div className="flex flex-col md:flex-row gap-16 lg:gap-24 w-full items-center">

        {/* LEFT — headline + CTAs */}
        <div className="flex-1">
          <div className="flex items-center gap-2 w-fit px-4 py-2 rounded-full border border-white/15 bg-white/5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-brand" />
            <span className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase font-medium">
              Building Modern Web
            </span>
          </div>

          <h1 className="font-black text-[clamp(3rem,5.5vw,6.5rem)] leading-[1.0] mb-10 cursor-default">
            <span className="block text-white">Web &</span>
            <span className="block text-brand italic">AI Systems</span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-4">
            <TransitionLink
              href="/proyectos"
              className="flex items-center justify-center gap-2 w-fit px-8 py-4 bg-brand text-white rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Mira mis proyectos →
            </TransitionLink>
            <TransitionLink
              href="/contacto"
              className="flex items-center justify-center gap-2 w-fit px-8 py-4 border border-white/20 text-white rounded-xl font-semibold text-sm hover:bg-white/5 transition-colors"
            >
              Contáctame
            </TransitionLink>
          </div>
        </div>

        {/* RIGHT — bio */}
        <div className="flex-1 flex flex-col gap-6 max-w-lg">
          <div className="w-8 h-px bg-brand" />

          <p className="text-muted-foreground text-base leading-relaxed cursor-default">
            Soy desarrollador de software con interés en crear aplicaciones útiles,
            bien diseñadas y técnicamente sólidas. Mi experiencia combina desarrollo
            web moderno con la construcción de sistemas inteligentes basados en
            modelos de lenguaje (LLMs).
          </p>

          <p className="text-muted-foreground text-base leading-relaxed cursor-default">
            He trabajado con tecnologías como React, Next.js y Node.js, además de
            construir agentes de IA capaces de interactuar con herramientas, bases
            de datos y documentación técnica mediante lenguaje natural.
          </p>

          <p className="text-muted-foreground text-base leading-relaxed cursor-default">
            Disfruto aprender constantemente y desarrollar soluciones que realmente
            puedan ser utilizadas por personas y equipos.
          </p>
        </div>

      </div>
    </main>
  );
}
