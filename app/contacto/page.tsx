"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, Send } from "lucide-react";

const socials = [
  { label: "GitHub",   href: "#", handle: "@lauther-dev" },
  { label: "LinkedIn", href: "#", handle: "lauther-valladares" },
  { label: "Twitter",  href: "#", handle: "@lauther_dev" },
];

export default function Contacto() {
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <main className="min-h-screen md:h-screen flex flex-col justify-center px-8 md:px-24 pt-24 pb-16 overflow-y-auto md:overflow-hidden max-w-[1400px] m-auto">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start lg:items-center w-full">

        {/* LEFT — headline + info */}
        <div className="flex-1 flex flex-col">

          {/* Availability badge */}
          <div className="flex items-center gap-2 w-fit px-4 py-2 rounded-full border border-white/15 bg-white/5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase font-medium">
              Available for work
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-black leading-[0.95] mb-6 cursor-default">
            <span className="block text-white text-[clamp(2.8rem,5vw,6rem)]">
              Let&apos;s build
            </span>
            <span className="block text-white text-[clamp(2.8rem,5vw,6rem)]">
              something
            </span>
            <span className="block text-brand italic text-[clamp(2.8rem,5vw,6rem)]">
              together.
            </span>
          </h1>

          {/* Description */}
          <p className="text-muted-foreground text-base leading-relaxed mb-10 max-w-sm">
            Open to freelance projects, full-time roles, and interesting
            collaborations. Let&apos;s talk.
          </p>

          {/* Contact info */}
          <div className="flex flex-col gap-3 mb-8">
            <a
              href="mailto:lauther@example.com"
              className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group w-fit"
            >
              <div className="w-8 h-8 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-brand/40 group-hover:bg-brand/10 transition-colors">
                <Mail size={14} className="group-hover:text-brand transition-colors" />
              </div>
              <span className="text-sm font-medium">lauther@example.com</span>
            </a>
            <div className="flex items-center gap-3 text-white/40">
              <div className="w-8 h-8 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center">
                <MapPin size={14} />
              </div>
              <span className="text-sm">Venezuela · Remote worldwide</span>
            </div>
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            {socials.map((s) => (
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
            ))}
          </div>
        </div>

        {/* RIGHT — form */}
        <div className="flex-1 w-full max-w-lg">
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>

            <div className="grid grid-cols-2 gap-4">
              {/* Name */}
              <div className="relative">
                <label
                  htmlFor="name"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none text-xs font-medium tracking-wide uppercase ${
                    focused === "name"
                      ? "top-2.5 text-brand text-[9px]"
                      : "top-1/2 -translate-y-1/2 text-white/30"
                  }`}
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  onFocus={() => setFocused("name")}
                  onBlur={(e) => !e.target.value && setFocused(null)}
                  className="w-full bg-white/4 border border-white/10 rounded-xl px-4 pt-6 pb-3 text-white text-sm outline-none focus:border-brand/50 focus:bg-brand/5 transition-colors"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <label
                  htmlFor="email"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none text-xs font-medium tracking-wide uppercase ${
                    focused === "email"
                      ? "top-2.5 text-brand text-[9px]"
                      : "top-1/2 -translate-y-1/2 text-white/30"
                  }`}
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  onFocus={() => setFocused("email")}
                  onBlur={(e) => !e.target.value && setFocused(null)}
                  className="w-full bg-white/4 border border-white/10 rounded-xl px-4 pt-6 pb-3 text-white text-sm outline-none focus:border-brand/50 focus:bg-brand/5 transition-colors"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="relative">
              <label
                htmlFor="subject"
                className={`absolute left-4 transition-all duration-200 pointer-events-none text-xs font-medium tracking-wide uppercase ${
                  focused === "subject"
                    ? "top-2.5 text-brand text-[9px]"
                    : "top-1/2 -translate-y-1/2 text-white/30"
                }`}
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                onFocus={() => setFocused("subject")}
                onBlur={(e) => !e.target.value && setFocused(null)}
                className="w-full bg-white/4 border border-white/10 rounded-xl px-4 pt-6 pb-3 text-white text-sm outline-none focus:border-brand/50 focus:bg-brand/5 transition-colors"
              />
            </div>

            {/* Message */}
            <div className="relative">
              <label
                htmlFor="message"
                className={`absolute left-4 transition-all duration-200 pointer-events-none text-xs font-medium tracking-wide uppercase ${
                  focused === "message"
                    ? "top-2.5 text-brand text-[9px]"
                    : "top-6 text-white/30"
                }`}
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
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
              Send Message
              <Send size={14} />
            </button>
          </form>
        </div>

      </div>
    </main>
  );
}
