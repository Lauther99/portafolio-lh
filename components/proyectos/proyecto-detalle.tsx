"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ExternalLink,
  Code,
  Play,
  Volume2,
  Maximize2,
  Share2,
} from "lucide-react";
import type { Proyecto } from "@/lib/proyectos";
import { TechPill } from "@/components/ui/tech-pill";

export function ProyectoDetalle({ proyecto }: { proyecto: Proyecto }) {
  return (
    <>
      {/* ── MOBILE layout ── */}
      <main className="md:hidden flex flex-col min-h-screen pt-16 pb-8 overflow-y-auto">
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-4 flex-shrink-0">
          <Link
            href="/proyectos"
            className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
          </Link>
          <span className="text-white text-xs font-semibold tracking-[0.2em] uppercase">
            Project Detail
          </span>
          <button className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white transition-colors">
            <Share2 size={16} />
          </button>
        </div>

        {/* Video / Media player */}
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mx-4 rounded-3xl overflow-hidden border border-white/10 bg-white/5 flex-shrink-0"
        >
          <div className="relative aspect-[9/14]">
            <Image
              src={proyecto.imagen}
              alt={proyecto.titleLine1}
              fill
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            {/* HD badge */}
            <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold px-2.5 py-1 rounded-full border border-white/20">
              HD 4K
            </div>

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-brand flex items-center justify-center shadow-lg shadow-brand/30">
                <Play size={24} className="text-white fill-white ml-1" />
              </div>
            </div>

            {/* Controls */}
            <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
              <div className="w-full h-1 bg-white/20 rounded-full mb-3">
                <div className="w-[27%] h-full bg-brand rounded-full relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/70 text-[11px] font-mono">0:37 / 2:23</span>
                <div className="flex gap-3">
                  <Volume2 size={16} className="text-white/60" />
                  <Maximize2 size={16} className="text-white/60" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content — slides up */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="px-5 flex flex-col gap-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-6 h-px bg-brand" />
            <span className="text-brand text-[10px] tracking-widest uppercase font-semibold">
              {proyecto.category}
            </span>
          </div>

          <h1 className="font-black leading-[0.95] cursor-default">
            <span className="block text-white text-5xl">{proyecto.titleLine1}</span>
            <span className="block text-brand italic text-5xl">{proyecto.titleLine2}</span>
          </h1>

          <p className="text-muted-foreground text-sm leading-relaxed">
            {proyecto.descripcion}
          </p>

          <div>
            <span className="text-white/40 text-[10px] tracking-[0.2em] uppercase font-semibold block mb-3">
              Tech Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {proyecto.tags.map((tag) => (
                <TechPill key={tag} id={tag} size="md" />
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            {proyecto.demo && (
              <a
                href={proyecto.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-brand text-white rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Live Demo <ExternalLink size={14} />
              </a>
            )}
            {proyecto.source && (
              <a
                href={proyecto.source}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 border border-white/20 text-white rounded-xl font-semibold text-sm hover:bg-white/5 transition-colors"
              >
                Source Code <Code size={14} />
              </a>
            )}
          </div>

          <div className="flex gap-10 pb-4">
            {proyecto.stats.map((stat) => (
              <div key={stat.label}>
                <span className="block text-brand font-black text-3xl">{stat.value}</span>
                <span className="text-white/40 text-[10px] tracking-widest uppercase font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <Link
            href="/proyectos"
            className="flex items-center gap-2 text-white/40 hover:text-white text-sm font-medium transition-colors pb-4"
          >
            <ArrowLeft size={14} />
            Back to Projects
          </Link>
        </motion.div>
      </main>

      {/* ── DESKTOP layout ── */}
      <main className="hidden md:flex h-screen flex-col pt-20 pb-8 overflow-hidden px-16 lg:px-24 max-w-[1400px] m-auto">
        <div className="mb-8 flex-shrink-0">
          <Link
            href="/proyectos"
            className="flex items-center gap-2 text-white/40 hover:text-white text-sm font-medium transition-colors w-fit"
          >
            <ArrowLeft size={14} />
            Back to Projects
          </Link>
        </div>

        <div className="flex-1 flex gap-16 items-center min-h-0">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 flex flex-col justify-center max-w-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-brand" />
              <span className="text-brand text-xs tracking-widest uppercase font-semibold">
                {proyecto.category}
              </span>
            </div>

            <h1 className="font-black leading-[0.95] mb-6 cursor-default">
              <span className="block text-white text-[clamp(3rem,5vw,6rem)]">
                {proyecto.titleLine1}
              </span>
              <span className="block text-brand italic text-[clamp(3rem,5vw,6rem)]">
                {proyecto.titleLine2}
              </span>
            </h1>

            <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-md">
              {proyecto.descripcion}
            </p>

            <div className="mb-8">
              <span className="text-white/40 text-[10px] tracking-[0.2em] uppercase font-semibold block mb-3">
                Tech Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {proyecto.tags.map((tag) => (
                  <TechPill key={tag} id={tag} size="md" />
                ))}
              </div>
            </div>

            <div className="flex gap-4 mb-10">
              {proyecto.demo && (
                <a
                  href={proyecto.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-brand text-white rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Live Demo <ExternalLink size={14} />
                </a>
              )}
              {proyecto.source && (
                <a
                  href={proyecto.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-xl font-semibold text-sm hover:bg-white/5 transition-colors"
                >
                  Source Code <Code size={14} />
                </a>
              )}
            </div>

            
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 relative flex items-center justify-center min-h-0 h-full pb-10"
          >
            <div className="relative w-full h-full max-w-lg ">
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-white/5">
                <Image
                  src={proyecto.imagen}
                  alt={proyecto.titleLine1}
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-background/60 via-transparent to-transparent" />
              </div>

              {/* Floating card top-right */}
              <div className="absolute -top-4 -right-4 bg-background/90 backdrop-blur-md border border-white/15 rounded-2xl px-4 py-3 max-w-[200px] shadow-xl">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                  </div>
                  <span className="text-white text-xs font-semibold">
                    {proyecto.features[0].title}
                  </span>
                </div>
                <p className="text-white/40 text-[10px] leading-relaxed pl-7">
                  {proyecto.features[0].description}
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
