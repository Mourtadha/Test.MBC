import Image from "next/image";
import type { Metadata } from "next";
import { buildMetadata, JsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { whyChooseUs } from "@/lib/content";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Notre Chauffeur Privé Professionnel",
  description:
    "Chauffeurs professionnels, discrets et ponctuels à Monaco. Suivi des vols en temps réel, service 24h/24 et 7j/7 sur toute la Côte d'Azur.",
  path: "/chauffeur",
});

export default function ChauffeurPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Chauffeur", path: "/chauffeur" },
        ])}
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-widest text-gold-ink">
            Notre Équipe
          </p>
          <h1 className="mt-2 font-serif text-4xl text-neutral-900 sm:text-5xl">
            Votre Chauffeur Privé
          </h1>
          <p className="mt-4 text-neutral-600">
            Nos chauffeurs sont sélectionnés pour leur professionnalisme, leur
            discrétion et leur parfaite connaissance de Monaco et de la Côte
            d&apos;Azur. Formés aux exigences du service haut de gamme, ils
            veillent à ce que chaque trajet soit sûr, ponctuel et confortable.
          </p>

          <dl className="mt-8 grid gap-6 sm:grid-cols-2">
            {whyChooseUs.map((item) => (
              <div key={item.title}>
                <dt className="font-semibold text-neutral-900">{item.title}</dt>
                <dd className="mt-1 text-sm text-neutral-600">
                  {item.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src="/assets/images/chauffeur.svg"
            alt="Chauffeur professionnel Monaco Black Cars"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <CTASection />
    </>
  );
}
