"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, ArrowRight, Plus } from "lucide-react";
import { proyectos } from "@/lib/proyectos";
import { TechPill } from "@/components/ui/tech-pill";

export default function Proyectos() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <main className="h-screen flex flex-col pt-24 pb-15 overflow-hidden px-16 md:px-24 max-w-[1400px] m-auto">
      {/* Header */}
      <div className="mb-6 flex-shrink-0">
        <h1 className="font-black text-[clamp(2.5rem,5vw,5rem)] text-white leading-tight">
          Featured Projects
        </h1>
      </div>

      {/* Accordion list */}
      <div className="flex-1 flex flex-col min-h-0 overflow-y-auto scrollbar-thin py-2">
        {proyectos.map((proyecto, i) => {
          const isOpen = open === proyecto.slug;
          return (
            <div
              key={proyecto.slug}
              className="border-t border-white/10 last:border-b"
            >
              {/* Row trigger */}
              <button
                onClick={() => setOpen(isOpen ? null : proyecto.slug)}
                className="w-full flex items-center gap-6 py-5 text-left group"
              >
                {/* Index */}
                <span className="text-white/20 text-xs font-mono w-6 flex-shrink-0">
                  0{i + 1}
                </span>

                {/* Name */}
                <span
                  className={`font-black text-[clamp(1.5rem,3vw,2.5rem)] leading-tight flex-1 transition-colors duration-200 ${
                    isOpen ? "text-brand" : "text-white group-hover:text-brand"
                  }`}
                >
                  {proyecto.nombre}
                </span>

                {/* Tags — hidden when open */}
                <div
                  className={`hidden md:flex gap-2 flex-shrink-0 transition-opacity duration-200 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                >
                  {proyecto.tags.map((tag) => (
                    <TechPill key={tag} id={tag} />
                  ))}
                </div>

                {/* Year */}
                <span className="text-white/30 text-xs font-mono flex-shrink-0 hidden md:block">
                  {proyecto.year}
                </span>

                {/* Icon */}
                <span
                  className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    isOpen
                      ? "border-brand bg-brand/10 rotate-45 text-brand"
                      : "border-white/15 text-white/40 group-hover:border-white/40 group-hover:text-white"
                  }`}
                >
                  <Plus size={14} />
                </span>
              </button>

              {/* Expandable content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? "max-h-72" : "max-h-0"
                }`}
              >
                <div className="flex gap-8 pb-6">
                  {/* Image */}
                  <div className="relative w-52 h-32 rounded-xl border border-white/10 overflow-hidden flex-shrink-0 bg-white/5">
                    <Image
                      src={proyecto.imagen}
                      alt={proyecto.nombre}
                      fill
                      className="object-cover object-top opacity-90"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex flex-col justify-between flex-1">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {proyecto.tags.map((tag) => (
                        <TechPill key={tag} id={tag} />
                      ))}
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 max-w-lg line-clamp-2">
                      {proyecto.descripcion}
                    </p>

                    {/* Links */}
                    <div className="flex items-center gap-5">
                      <Link
                        href={`/proyectos/${proyecto.slug}`}
                        className="flex items-center gap-1.5 text-brand text-sm font-semibold hover:gap-2.5 transition-all duration-200"
                      >
                        View Case Study
                        <ArrowRight size={14} />
                      </Link>
                      <a
                        href={proyecto.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-white/50 hover:text-white text-sm font-medium transition-colors"
                      >
                        Live Demo
                        <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </main>
  );
}
