"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { vehicles } from "@/lib/vehicles";
import { siteConfig } from "@/lib/site";

function ReservationForm() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("vehicleId") ?? "";
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-2xl border border-gold/30 bg-white p-8 text-center shadow-sm shadow-neutral-900/5"
      >
        <p className="font-serif text-2xl text-neutral-900">Merci pour votre demande</p>
        <p className="mt-2 text-neutral-600">
          Notre équipe vous recontactera très prochainement pour confirmer
          votre réservation. Pour toute urgence, appelez-nous au{" "}
          <a href={`tel:${siteConfig.phone}`} className="text-gold-ink hover:underline">
            {siteConfig.phoneDisplay}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      className="space-y-6 rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm shadow-neutral-900/5"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm text-neutral-700">
            Nom complet
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="mt-2 w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-neutral-900 outline-none focus:border-gold"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm text-neutral-700">
            Téléphone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="mt-2 w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-neutral-900 outline-none focus:border-gold"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="text-sm text-neutral-700">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-2 w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-neutral-900 outline-none focus:border-gold"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="vehicleId" className="text-sm text-neutral-700">
            Véhicule souhaité
          </label>
          <select
            id="vehicleId"
            name="vehicleId"
            defaultValue={preselected}
            className="mt-2 w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-neutral-900 outline-none focus:border-gold"
          >
            <option value="">Sans préférence</option>
            {vehicles.map((vehicle) => (
              <option key={vehicle.slug} value={vehicle.slug}>
                {vehicle.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="date" className="text-sm text-neutral-700">
            Date &amp; heure
          </label>
          <input
            id="date"
            name="date"
            type="datetime-local"
            required
            className="mt-2 w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-neutral-900 outline-none focus:border-gold"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="pickup" className="text-sm text-neutral-700">
            Lieu de prise en charge
          </label>
          <input
            id="pickup"
            name="pickup"
            type="text"
            required
            className="mt-2 w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-neutral-900 outline-none focus:border-gold"
          />
        </div>
        <div>
          <label htmlFor="destination" className="text-sm text-neutral-700">
            Destination
          </label>
          <input
            id="destination"
            name="destination"
            type="text"
            required
            className="mt-2 w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-neutral-900 outline-none focus:border-gold"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm text-neutral-700">
          Message (optionnel)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-2 w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-neutral-900 outline-none focus:border-gold"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-gold px-8 py-3 text-sm font-semibold uppercase tracking-wide text-black hover:bg-gold-light"
      >
        Envoyer la Demande
      </button>
    </form>
  );
}

export default function ReservationPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-20">
      <p className="text-sm uppercase tracking-widest text-gold-ink">Réservation</p>
      <h1 className="mt-2 font-serif text-4xl text-neutral-900 sm:text-5xl">
        Réservez Votre Chauffeur
      </h1>
      <p className="mt-4 text-neutral-600">
        Remplissez le formulaire ci-dessous et notre équipe vous recontactera
        rapidement pour confirmer votre trajet.
      </p>

      <div className="mt-10">
        <Suspense fallback={null}>
          <ReservationForm />
        </Suspense>
      </div>
    </section>
  );
}
