import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, JsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Tarifs Chauffeur Privé Monaco",
  description:
    "Tarifs transparents pour vos transferts aéroport, gare, mise à disposition et longue distance avec chauffeur privé à Monaco. Devis personnalisé gratuit.",
  path: "/tarifs",
});

const pricingTiers = [
  {
    name: "Transfert Aéroport",
    description: "Nice NCE, Cannes ou héliport Monaco, aller simple.",
    price: "Sur devis",
  },
  {
    name: "Mise à Disposition",
    description: "Chauffeur privé à la demi-journée ou à la journée.",
    price: "Sur devis",
  },
  {
    name: "Longue Distance",
    description: "Milan, Paris, Genève et toute l'Europe.",
    price: "Sur devis",
  },
];

export default function TarifsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Tarifs", path: "/tarifs" },
        ])}
      />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-sm uppercase tracking-widest text-gold-ink">Tarifs</p>
        <h1 className="mt-2 font-serif text-4xl text-neutral-900 sm:text-5xl">
          Des Tarifs Adaptés à Vos Besoins
        </h1>
        <p className="mt-4 max-w-2xl text-neutral-600">
          Chaque trajet est unique : nos tarifs dépendent du véhicule choisi,
          de la distance et de la durée de la prestation. Contactez-nous pour
          un devis personnalisé et transparent, sans frais cachés.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className="rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm shadow-neutral-900/5"
            >
              <h2 className="font-serif text-xl text-neutral-900">{tier.name}</h2>
              <p className="mt-2 text-sm text-neutral-600">
                {tier.description}
              </p>
              <p className="mt-4 font-serif text-lg text-gold-ink">{tier.price}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-neutral-500">
          Besoin d&apos;un devis immédiat ? Appelez-nous au{" "}
          <a href={`tel:${siteConfig.phone}`} className="text-gold-ink hover:underline">
            {siteConfig.phoneDisplay}
          </a>{" "}
          ou{" "}
          <Link href="/reservation" className="text-gold-ink hover:underline">
            faites une demande en ligne
          </Link>
          .
        </p>
      </section>

      <CTASection />
    </>
  );
}
