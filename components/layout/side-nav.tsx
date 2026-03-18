'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sections } from "@/lib/sections";
import { cn } from "@/lib/utils";

export function SideNav() {
  const pathname = usePathname();

  return (
    <div className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 z-50 flex-col gap-3">
      {sections.map((section) => {
        const isActive = pathname === section.href;
        return (
          <Link
            key={section.href}
            href={section.href}
            title={section.label}
            className={cn(
              "rounded-full transition-all duration-300",
              isActive
                ? "w-2.5 h-2.5 bg-brand"
                : "w-1.5 h-1.5 bg-white/25 hover:bg-white/50"
            )}
          />
        );
      })}
    </div>
  );
}
