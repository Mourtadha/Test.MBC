import Image from "next/image";
import Link from "next/link";
import type { Vehicle } from "@/lib/vehicles";

export default function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <article className="card-hover group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm shadow-neutral-900/5">
      <div className="relative aspect-[8/5] overflow-hidden">
        <Image
          src={vehicle.image}
          alt={`${vehicle.name} — chauffeur privé Monaco Black Cars`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold-ink">
          {vehicle.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-serif text-xl text-neutral-900">{vehicle.name}</h3>
        <p className="text-sm text-neutral-600">{vehicle.shortDescription}</p>

        <dl className="mt-2 flex gap-4 text-xs text-neutral-500">
          <div>
            <dt className="sr-only">Places</dt>
            <dd>{vehicle.seats} places</dd>
          </div>
          <div>
            <dt className="sr-only">Bagages</dt>
            <dd>{vehicle.luggage} bagages</dd>
          </div>
          <div>
            <dt className="sr-only">Couleur</dt>
            <dd>{vehicle.color}</dd>
          </div>
        </dl>

        <div className="mt-auto flex gap-3 pt-4">
          <Link
            href={`/vehicules/${vehicle.slug}`}
            className="flex-1 rounded-full border border-neutral-300 px-4 py-2 text-center text-sm font-semibold uppercase tracking-wide text-neutral-900 transition-colors hover:border-gold hover:text-gold-ink"
          >
            Voir
          </Link>
          <Link
            href={`/reservation?vehicleId=${vehicle.slug}`}
            className="flex-1 rounded-full bg-gold px-4 py-2 text-center text-sm font-semibold uppercase tracking-wide text-black hover:bg-gold-light"
          >
            Réserver
          </Link>
        </div>
      </div>
    </article>
  );
}
