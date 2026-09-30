import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getVehicleBySlug, vehicles } from "@/lib/vehicles";
import { buildMetadata, JsonLd, breadcrumbJsonLd, vehicleJsonLd } from "@/lib/seo";
import CTASection from "@/components/CTASection";

type Params = { slug: string };

export function generateStaticParams() {
  return vehicles.map((vehicle) => ({ slug: vehicle.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);
  if (!vehicle) return {};

  return buildMetadata({
    title: `${vehicle.name} avec Chauffeur Privé`,
    description: vehicle.shortDescription,
    path: `/vehicules/${vehicle.slug}`,
    image: vehicle.image,
  });
}

export default async function VehicleDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);
  if (!vehicle) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Véhicules", path: "/vehicules" },
          { name: vehicle.name, path: `/vehicules/${vehicle.slug}` },
        ])}
      />
      <JsonLd data={vehicleJsonLd(vehicle)} />

      <article className="mx-auto max-w-5xl px-6 py-20">
        <nav aria-label="Fil d'Ariane" className="text-sm text-neutral-500">
          <Link href="/vehicules" className="hover:text-gold-ink">
            Véhicules
          </Link>
          <span className="mx-2">/</span>
          <span className="text-neutral-700">{vehicle.name}</span>
        </nav>

        <div className="relative mt-6 aspect-[8/5] overflow-hidden rounded-2xl">
          <Image
            src={vehicle.image}
            alt={`${vehicle.name} — chauffeur privé Monaco Black Cars`}
            fill
            priority
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover"
          />
        </div>

        <span className="mt-6 inline-block rounded-full bg-neutral-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold-ink">
          {vehicle.category}
        </span>
        <h1 className="mt-3 font-serif text-4xl text-neutral-900">{vehicle.name}</h1>
        <p className="mt-4 text-neutral-600">{vehicle.description}</p>

        <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
          <div>
            <dt className="text-xs uppercase tracking-wide text-neutral-500">
              Places
            </dt>
            <dd className="mt-1 font-serif text-xl text-neutral-900">{vehicle.seats}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-neutral-500">
              Bagages
            </dt>
            <dd className="mt-1 font-serif text-xl text-neutral-900">{vehicle.luggage}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-neutral-500">
              Couleur
            </dt>
            <dd className="mt-1 font-serif text-xl text-neutral-900">{vehicle.color}</dd>
          </div>
        </dl>

        <h2 className="mt-10 font-serif text-2xl text-neutral-900">Équipements</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {vehicle.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-neutral-700">
              <span aria-hidden="true" className="text-gold-ink">
                ✓
              </span>
              {feature}
            </li>
          ))}
        </ul>

        <Link
          href={`/reservation?vehicleId=${vehicle.slug}`}
          className="mt-10 inline-block rounded-full bg-gold px-8 py-3 text-sm font-semibold uppercase tracking-wide text-black hover:bg-gold-light"
        >
          Réserver ce véhicule
        </Link>
      </article>

      <CTASection />
    </>
  );
}
