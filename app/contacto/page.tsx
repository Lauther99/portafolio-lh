"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, Download, Mail, MapPin, Send, X } from "lucide-react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Lauther99",
    handle: "@lauther-dev",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lautherhvalladares/",
    handle: "lauther-valladares",
  },
  { label: "CV", href: "/docs/cv-2026", handle: "@lauther_dev" },
];

export default function Contacto() {
  const [focused, setFocused] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", subject: "", message: "" });
  const [cvOpen, setCvOpen] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) return;
    const text = `Hola, soy *${form.name}*.\n*Asunto:* ${form.subject}\n\n${form.message}`;
    const url = `https://wa.me/51952295928?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  }

  return (
    <>
      <main className="min-h-screen md:h-screen flex flex-col justify-center px-8 md:px-24 pt-24 pb-16 overflow-y-auto md:overflow-hidden max-w-[1400px] m-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start lg:items-center w-full">
          {/* LEFT — headline + info */}
          <div className="flex-1 flex flex-col">
            {/* Availability badge */}
            <div className="flex items-center gap-2 w-fit px-4 py-2 rounded-full border border-white/15 bg-white/5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase font-medium">
                Disponible para trabajar
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-black leading-[0.95] mb-6 cursor-default">
              <span className="block text-white text-[clamp(2.8rem,5vw,6rem)]">
                Construyamos
              </span>
              <span className="block text-white text-[clamp(2.8rem,5vw,6rem)]">
                algo
              </span>
              <span className="block text-brand italic text-[clamp(2.8rem,5vw,6rem)]">
                increíble.
              </span>
            </h1>

            {/* Description */}
            <p className="text-muted-foreground text-base leading-relaxed mb-10 max-w-sm">
              Disponible para proyectos freelance, colaboraciones o nuevas
              oportunidades. <br />
              Hablemos :D
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-3 mb-8">
              <a
                href="mailto:lauther@example.com"
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group w-fit"
              >
                <div className="w-8 h-8 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-brand/40 group-hover:bg-brand/10 transition-colors">
                  <Mail
                    size={14}
                    className="group-hover:text-brand transition-colors"
                  />
                </div>
                <span className="text-sm font-medium">
                  lauthervalladares27@gmail.com
                </span>
              </a>
              <div className="flex items-center gap-3 text-white/40">
                <div className="w-8 h-8 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center">
                  <MapPin size={14} />
                </div>
                <span className="text-sm">Perú · Disponible globalmente</span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-4">
              {socials.map((s) =>
                s.label === "CV" ? (
                  <button
                    key={s.label}
                    onClick={() => setCvOpen(true)}
                    className="flex items-center gap-1 text-white/30 hover:text-white text-xs font-medium tracking-wide transition-colors"
                  >
                    {s.label}
                    <ArrowUpRight size={11} />
                  </button>
                ) : (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-white/30 hover:text-white text-xs font-medium tracking-wide transition-colors"
                  >
                    {s.label}
                    <ArrowUpRight size={11} />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* RIGHT — form */}
          <div className="flex-1 w-full max-w-lg">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="relative">
                {/* Name */}
                <div className="relative">
                  <label
                    htmlFor="name"
                    className={`absolute left-4 transition-all duration-200 pointer-events-none font-medium tracking-wide uppercase ${
                      focused === "name" || form.name
                        ? `top-2.5 text-[9px] ${focused === "name" ? "text-brand" : "text-white/40"}`
                        : "top-1/2 -translate-y-1/2 text-white/30 text-xs"
                    }`}
                  >
                    Nombre
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    onFocus={() => setFocused("name")}
                    onBlur={(e) => !e.target.value && setFocused(null)}
                    className="w-full bg-white/4 border border-white/10 rounded-xl px-4 pt-6 pb-3 text-white text-sm outline-none focus:border-brand/50 focus:bg-brand/5 transition-colors"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="relative">
                <label
                  htmlFor="subject"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none font-medium tracking-wide uppercase ${
                    focused === "subject" || form.subject
                      ? `top-2.5 text-[9px] ${focused === "subject" ? "text-brand" : "text-white/40"}`
                      : "top-1/2 -translate-y-1/2 text-white/30 text-xs"
                  }`}
                >
                  Asunto
                </label>
                <input
                  id="subject"
                  type="text"
                  value={form.subject}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, subject: e.target.value }))
                  }
                  onFocus={() => setFocused("subject")}
                  onBlur={(e) => !e.target.value && setFocused(null)}
                  className="w-full bg-white/4 border border-white/10 rounded-xl px-4 pt-6 pb-3 text-white text-sm outline-none focus:border-brand/50 focus:bg-brand/5 transition-colors"
                />
              </div>

              {/* Message */}
              <div className="relative">
                <label
                  htmlFor="message"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none font-medium tracking-wide uppercase ${
                    focused === "message" || form.message
                      ? `top-2.5 text-[9px] ${focused === "message" ? "text-brand" : "text-white/40"}`
                      : "top-6 text-white/30 text-xs"
                  }`}
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                  onFocus={() => setFocused("message")}
                  onBlur={(e) => !e.target.value && setFocused(null)}
                  className="w-full bg-white/4 border border-white/10 rounded-xl px-4 pt-8 pb-4 text-white text-sm outline-none focus:border-brand/50 focus:bg-brand/5 transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="flex items-center justify-center gap-2 w-full py-4 bg-brand text-white rounded-xl font-semibold text-sm hover:opacity-90 active:scale-[0.98] transition-all"
              >
                Enviar
                <Send size={14} />
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* CV Modal */}
      {cvOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            onClick={() => setCvOpen(false)}
          >
            <div
              className="relative w-full max-w-3xl h-[90vh] bg-background border border-white/10 rounded-2xl overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 flex-shrink-0">
                <span className="text-white text-sm font-semibold">
                  Curriculum Vitae
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="/docs/cv-2026.pdf"
                    download
                    className="flex items-center gap-2 px-4 py-2 bg-brand text-white rounded-lg text-xs font-semibold hover:opacity-90 transition-opacity"
                  >
                    <Download size={13} />
                    Descargar
                  </a>
                  <button
                    onClick={() => setCvOpen(false)}
                    className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/50 hover:text-white transition-colors cursor-pointer"
                  >
                    <X size={15} />
                  </button>
                </div>
              </div>

              {/* PDF viewer */}
              <iframe
                src="/docs/cv-2026.pdf"
                className="flex-1 w-full"
                title="CV"
              />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
