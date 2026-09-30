import Link from "next/link";
import { footerLinks, siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black text-neutral-300">
      <div className="divider-gold absolute inset-x-0 top-0" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif text-lg font-semibold tracking-[0.2em] text-gold">
            MONACO <span className="text-white">BLACK CARS</span>
          </p>
          <p className="mt-2 text-sm text-neutral-400">
            Excellence &amp; Discrétion
          </p>
          <p className="mt-4 text-sm">
            <a href={`tel:${siteConfig.phone}`} className="hover:text-gold">
              {siteConfig.phoneDisplay}
            </a>
          </p>
          <p className="text-sm">
            <a href={`mailto:${siteConfig.email}`} className="hover:text-gold">
              {siteConfig.email}
            </a>
          </p>
        </div>

        <nav aria-label="Services">
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-400">
            Services
          </h2>
          <ul className="space-y-2 text-sm">
            {footerLinks.services.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Entreprise">
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-400">
            Entreprise
          </h2>
          <ul className="space-y-2 text-sm">
            {footerLinks.company.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-400">
            Contact
          </h2>
          <p className="text-sm">Monaco, Principauté de Monaco</p>
          <Link
            href="/reservation"
            className="mt-4 inline-block rounded-full bg-gold px-5 py-2 text-sm font-semibold uppercase tracking-wide text-black hover:bg-gold-light"
          >
            Réserver
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-xs text-neutral-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Monaco Black Cars. Tous droits réservés.</p>
          <div className="flex gap-4">
            {footerLinks.legal.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-gold">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
