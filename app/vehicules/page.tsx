import type { Metadata } from "next";
import { vehicles } from "@/lib/vehicles";
import { buildMetadata, JsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import VehicleCard from "@/components/VehicleCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Notre Flotte de Véhicules de Luxe",
  description:
    "Découvrez la flotte Monaco Black Cars : Mercedes Classe S, Maybach S 580, Classe V et Tesla Model Y. Véhicules premium avec chauffeur privé à Monaco.",
  path: "/vehicules",
});

export default function VehiculesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Véhicules", path: "/vehicules" },
        ])}
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm uppercase tracking-widest text-gold-ink">Notre Flotte</p>
        <h1 className="mt-2 font-serif text-4xl text-neutral-900 sm:text-5xl">
          Véhicules d&apos;Exception
        </h1>
        <p className="mt-4 max-w-2xl text-neutral-600">
          Chaque véhicule de la flotte {siteConfig.name} est soigneusement
          entretenu et conduit par un chauffeur professionnel, pour une
          expérience de transport à la hauteur de vos exigences.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.slug} vehicle={vehicle} />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
