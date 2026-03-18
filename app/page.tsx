import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center text-center px-6">
      {/* Available badge */}
      <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
        <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
        <span className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase font-medium">
          Available for projects
        </span>
      </div>

      {/* Name - massive display text */}
      <h1 className="leading-[0.9] font-black uppercase tracking-tight cursor-default">
        <span className="block text-white text-[clamp(3.5rem,9vw,13rem)] font-sans tracking-[-0.1rem]">
          Lauther
        </span>
        <span className="block text-brand text-[clamp(3.5rem,9vw,13rem)]">
          Valladares
        </span>
      </h1>

      {/* Description */}
      <p className="mt-8 max-w-lg text-muted-foreground text-base md:text-lg leading-relaxed">
        Crafting{" "}
        <strong className="text-white font-semibold">digital experiences</strong>{" "}
        through motion-rich interactions and clean, high-performance code.
      </p>

      {/* CTAs */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <Link
          href="/proyectos"
          className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-xl font-semibold text-sm hover:bg-white/90 transition-colors"
        >
          Explore Work →
        </Link>
      </div>
    </main>
  );
}
