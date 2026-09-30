import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { vehicles } from "@/lib/vehicles";
import { services, testimonials, whyChooseUs } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import { buildMetadata, JsonLd, aggregateRatingJsonLd } from "@/lib/seo";
import VehicleCard from "@/components/VehicleCard";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = buildMetadata({
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd data={aggregateRatingJsonLd(testimonials)} />

      <section className="relative overflow-hidden">
        <Image
          src="/assets/images/hero.svg"
          alt="Le Casino de Monte-Carlo et la Place du Casino à Monaco — Monaco Black Cars"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-transparent" />
        <div className="relative mx-auto flex min-h-[80vh] max-w-7xl flex-col justify-end px-6 pb-20 pt-32">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/40 bg-white/90 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-gold-ink backdrop-blur-sm">
            Excellence &amp; Discrétion
          </span>
          <p className="mt-6 text-sm uppercase tracking-[0.3em] text-neutral-200">
            Service de transport de luxe 24h/24, 7j/7
          </p>
          <h1 className="hero-shadow mt-4 max-w-2xl text-balance font-serif text-4xl leading-tight text-white sm:text-6xl">
            {siteConfig.tagline}
          </h1>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/reservation"
              className="rounded-full bg-gold px-8 py-3 text-sm font-semibold uppercase tracking-wide text-black transition-transform duration-300 hover:scale-[1.03] hover:bg-gold-light"
            >
              Réserver Maintenant
            </Link>
            <Link
              href="/vehicules"
              className="rounded-full border border-white/50 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:border-gold hover:text-gold-light"
            >
              Notre Flotte
            </Link>
          </div>

          <div className="divider-gold mt-16 max-w-md" aria-hidden="true" />
          <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {siteConfig.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-serif text-3xl text-gold-light">{stat.value}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wide text-neutral-200">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20" aria-labelledby="fleet-heading">
        <p className="text-sm uppercase tracking-widest text-gold-ink">Notre Flotte</p>
        <h2 id="fleet-heading" className="mt-2 font-serif text-3xl text-neutral-900 sm:text-4xl">
          Véhicules d&apos;Exception
        </h2>
        <p className="mt-3 max-w-2xl text-neutral-600">
          Chaque véhicule est soigneusement entretenu pour vous offrir une
          expérience de transport inégalée.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.slug} vehicle={vehicle} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/vehicules"
            className="inline-block rounded-full border border-neutral-300 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-neutral-900 transition-colors hover:border-gold hover:text-gold-ink"
          >
            Voir Tous Les Véhicules
          </Link>
        </div>
      </section>

      <section className="bg-surface-alt py-20" aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm uppercase tracking-widest text-gold-ink">Nos Prestations</p>
          <h2 id="services-heading" className="mt-2 font-serif text-3xl text-neutral-900 sm:text-4xl">
            Services Sur Mesure
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20" aria-labelledby="why-heading">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-gold-ink">
              Pourquoi Nous Choisir
            </p>
            <h2 id="why-heading" className="mt-2 font-serif text-3xl text-neutral-900 sm:text-4xl">
              L&apos;Excellence du Transport Privé
            </h2>
            <p className="mt-4 text-neutral-600">
              Depuis plus de 10 ans, Monaco Black Cars incarne l&apos;art du
              transport de luxe sur la Côte d&apos;Azur. Notre engagement
              envers l&apos;excellence se reflète dans chaque trajet.
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

            <Link
              href="/chauffeur"
              className="mt-8 inline-block rounded-full border border-neutral-300 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-neutral-900 transition-colors hover:border-gold hover:text-gold-ink"
            >
              Découvrir Notre Chauffeur
            </Link>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm shadow-neutral-900/10">
            <Image
              src="/assets/images/chauffeur.svg"
              alt="Monaco Black Cars — service premium"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-surface-alt py-20" aria-labelledby="coverage-heading">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm uppercase tracking-widest text-gold-ink">
            Zone de Couverture
          </p>
          <h2 id="coverage-heading" className="mt-2 font-serif text-3xl text-neutral-900 sm:text-4xl">
            Partout Où Vous Allez
          </h2>

          <ul className="mt-8 flex flex-wrap justify-center gap-3">
            {siteConfig.coverageAreas.map((area) => (
              <li
                key={area}
                className="rounded-full border border-neutral-200 bg-white px-5 py-2 text-sm text-neutral-700 shadow-sm shadow-neutral-900/5"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20" aria-labelledby="reviews-heading">
        <p className="text-sm uppercase tracking-widest text-gold-ink">Avis Clients</p>
        <h2 id="reviews-heading" className="mt-2 font-serif text-3xl text-neutral-900 sm:text-4xl">
          Ils Nous Font Confiance
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
