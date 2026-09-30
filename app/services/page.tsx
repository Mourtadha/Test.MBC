import type { Metadata } from "next";
import { services } from "@/lib/content";
import { buildMetadata, JsonLd, breadcrumbJsonLd } from "@/lib/seo";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Nos Services de Chauffeur Privé",
  description:
    "Transfert aéroport, gare, mise à disposition, événements, longue distance et croisières : découvrez tous les services de chauffeur privé Monaco Black Cars.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm uppercase tracking-widest text-gold-ink">Nos Prestations</p>
        <h1 className="mt-2 font-serif text-4xl text-neutral-900 sm:text-5xl">
          Services Sur Mesure
        </h1>
        <p className="mt-4 max-w-2xl text-neutral-600">
          Quel que soit votre besoin — transfert, événement ou mise à
          disposition — notre équipe s&apos;adapte pour vous offrir un service
          irréprochable, disponible 24h/24 et 7j/7.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
