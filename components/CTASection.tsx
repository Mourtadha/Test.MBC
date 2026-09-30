import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 py-20">
      <div className="divider-gold absolute inset-x-0 top-0" aria-hidden="true" />
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-serif text-3xl text-white sm:text-4xl">
          Prêt à Voyager en Première Classe ?
        </h2>
        <p className="mt-4 text-neutral-400">
          Contactez-nous dès maintenant pour réserver votre transfert ou
          obtenir un devis personnalisé.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/reservation"
            className="rounded-full bg-gold px-8 py-3 text-sm font-semibold uppercase tracking-wide text-black transition-transform duration-300 hover:scale-[1.03] hover:bg-gold-light"
          >
            Réserver Maintenant
          </Link>
          <a
            href={`tel:${siteConfig.phone}`}
            className="rounded-full border border-white/20 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:border-gold hover:text-gold"
          >
            {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
