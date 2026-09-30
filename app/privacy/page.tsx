import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Politique de Confidentialité",
  description:
    "Politique de confidentialité de Monaco Black Cars concernant la collecte et le traitement de vos données personnelles.",
  path: "/privacy",
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="font-serif text-4xl text-neutral-900">
        Politique de Confidentialité
      </h1>
      <div className="mt-6 space-y-4 text-neutral-600">
        <p>
          {siteConfig.name} attache une grande importance à la protection de
          vos données personnelles. Cette page décrit les informations que
          nous collectons via notre formulaire de réservation (nom,
          téléphone, email, trajet) et la manière dont elles sont utilisées
          exclusivement pour traiter votre demande de transport.
        </p>
        <p>
          Vos données ne sont jamais revendues à des tiers. Vous pouvez à
          tout moment demander l&apos;accès, la rectification ou la
          suppression de vos données en nous contactant à{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-gold-ink hover:underline">
            {siteConfig.email}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
