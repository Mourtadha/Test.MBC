import type { Metadata } from "next";
import { buildMetadata, JsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "À Propos de Monaco Black Cars",
  description:
    "Depuis plus de 10 ans, Monaco Black Cars offre un service de chauffeur privé de luxe à Monaco et sur la Côte d'Azur, alliant excellence, ponctualité et discrétion.",
  path: "/a-propos",
});

export default function AProposPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "À Propos", path: "/a-propos" },
        ])}
      />

      <section className="mx-auto max-w-3xl px-6 py-20">
        <p className="text-sm uppercase tracking-widest text-gold-ink">
          À Propos
        </p>
        <h1 className="mt-2 font-serif text-4xl text-neutral-900 sm:text-5xl">
          L&apos;Excellence du Transport Privé
        </h1>
        <div className="mt-6 space-y-4 text-neutral-600">
          <p>
            Depuis plus de 10 ans, {siteConfig.name} incarne l&apos;art du
            transport de luxe sur la Côte d&apos;Azur. Basés à Monaco, nous
            accompagnons une clientèle internationale exigeante lors de leurs
            déplacements professionnels et privés.
          </p>
          <p>
            Notre flotte de véhicules premium — Mercedes Classe S, Maybach S
            580, Classe V et Tesla Model Y — est entretenue selon les plus
            hauts standards, et conduite par des chauffeurs professionnels
            formés à la discrétion et à la ponctualité.
          </p>
          <p>
            Plus de 5 000 clients nous font confiance pour leurs transferts
            aéroport, événements, croisières et trajets longue distance en
            Europe. Notre engagement : un service irréprochable, disponible
            24h/24 et 7j/7.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
