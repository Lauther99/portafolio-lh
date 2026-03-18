"use client";

import { useTransition } from "@/context/transition-context";
import { usePathname } from "next/navigation";
import { MouseEvent } from "react";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function TransitionLink({ href, children, className }: Props) {
  const { navigate, isTransitioning } = useTransition();
  const pathname = usePathname();

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    if (pathname === href || isTransitioning) return;
    navigate(href);
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
