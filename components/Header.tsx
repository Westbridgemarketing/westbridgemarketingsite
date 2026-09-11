"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Wordmark from "./Wordmark";

const NAV = [
  { label: "Projects", href: "/projects" },
  { label: "Process", href: "/process" },
  { label: "Services", href: "/services" },
  { label: "Report", href: "/report" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [solid, setSolid] = useState(!isHome);

  useEffect(() => {
    if (!isHome) {
      setSolid(true);
      return;
    }
    const onScroll = () => setSolid(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const tone = solid ? "ink" : "paper";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ease-premium ${
        solid
          ? "bg-paper border-b border-ink/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="w-full max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-10 py-5">
        <Link href="/" onClick={() => setOpen(false)}>
          <Wordmark form="short" tone={tone} size="sm" />
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-archivo text-[11px] uppercase tracking-caps transition-colors duration-300 ease-premium ${
                solid
                  ? "text-ink/70 hover:text-ink"
                  : "text-paper/80 hover:text-paper"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className={`btn hidden md:inline-flex font-archivo text-[11px] uppercase tracking-caps border px-6 py-2.5 ${
            solid
              ? "border-ink/30 text-ink hover:bg-ink hover:text-paper hover:border-ink"
              : "border-paper/50 text-paper hover:bg-paper hover:text-ink hover:border-paper"
          }`}
        >
          Start a Conversation
        </Link>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden relative h-8 w-8 flex flex-col items-center justify-center gap-[6px]"
        >
          <span
            className={`block h-[1.5px] w-6 transition-transform duration-300 ease-premium ${
              solid ? "bg-ink" : "bg-paper"
            } ${open ? "translate-y-[7.5px] rotate-45" : ""}`}
          />
          <span
            className={`block h-[1.5px] w-6 transition-opacity duration-300 ease-premium ${
              solid ? "bg-ink" : "bg-paper"
            } ${open ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`block h-[1.5px] w-6 transition-transform duration-300 ease-premium ${
              solid ? "bg-ink" : "bg-paper"
            } ${open ? "-translate-y-[7.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-[400ms] ease-premium ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } ${solid ? "bg-paper" : "bg-ink/95"}`}
      >
        <nav className="flex flex-col px-6 pb-6 pt-1 border-t border-ink/10">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`font-archivo text-[12px] uppercase tracking-caps transition-colors duration-300 ease-premium py-3 border-b ${
                solid
                  ? "text-ink/75 hover:text-ink border-ink/10"
                  : "text-paper/85 hover:text-paper border-paper/15"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className={`btn mt-5 text-center font-archivo text-[11px] uppercase tracking-caps border px-5 py-3 ${
              solid
                ? "border-ink/30 text-ink hover:bg-ink hover:text-paper"
                : "border-paper/50 text-paper hover:bg-paper hover:text-ink"
            }`}
          >
            Start a Conversation
          </Link>
        </nav>
      </div>
    </header>
  );
}
