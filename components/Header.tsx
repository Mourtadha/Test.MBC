"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <div className="divider-gold" aria-hidden="true" />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-serif text-lg font-semibold tracking-[0.2em] text-gold-ink"
        >
          MONACO <span className="text-neutral-900">BLACK CARS</span>
        </Link>

        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-8 lg:flex"
        >
          <ul className="flex items-center gap-7 text-sm uppercase tracking-wide text-neutral-700">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative py-1 transition-colors hover:text-gold-ink after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/reservation"
            className="rounded-full bg-gold px-5 py-2 text-sm font-semibold uppercase tracking-wide text-black transition-transform duration-300 hover:scale-[1.05] hover:bg-gold-light"
          >
            Réserver
          </Link>
        </nav>

        <button
          type="button"
          className="lg:hidden text-neutral-700"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Ouvrir le menu de navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Navigation mobile"
          className="border-t border-neutral-200 bg-white px-6 py-4 lg:hidden"
        >
          <ul className="flex flex-col gap-4 text-sm uppercase tracking-wide text-neutral-700">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 transition-colors hover:text-gold-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/reservation"
                onClick={() => setOpen(false)}
                className="mt-2 inline-block rounded-full bg-gold px-5 py-2 font-semibold text-black"
              >
                Réserver
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
