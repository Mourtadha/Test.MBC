import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Conditions d'Utilisation",
  description:
    "Conditions générales d'utilisation des services de chauffeur privé Monaco Black Cars.",
  path: "/terms",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="font-serif text-4xl text-neutral-900">
        Conditions d&apos;Utilisation
      </h1>
      <div className="mt-6 space-y-4 text-neutral-600">
        <p>
          L&apos;utilisation du site et des services de {siteConfig.name}{" "}
          implique l&apos;acceptation pleine et entière des présentes
          conditions générales. Les réservations sont soumises à
          confirmation par notre équipe et peuvent être annulées ou
          modifiées selon les modalités communiquées lors de la prise de
          contact.
        </p>
        <p>
          Pour toute question relative à ces conditions, contactez-nous à{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-gold-ink hover:underline">
            {siteConfig.email}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
