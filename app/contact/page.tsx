import type { Metadata } from "next";
import { buildMetadata, JsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Contactez Monaco Black Cars par téléphone, email ou WhatsApp pour réserver votre chauffeur privé à Monaco et sur la Côte d'Azur.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <section className="mx-auto max-w-3xl px-6 py-20">
        <p className="text-sm uppercase tracking-widest text-gold-ink">Contact</p>
        <h1 className="mt-2 font-serif text-4xl text-neutral-900 sm:text-5xl">
          Contactez-Nous
        </h1>
        <p className="mt-4 text-neutral-600">
          Notre équipe est disponible 24h/24 et 7j/7 pour répondre à vos
          questions et organiser votre transport.
        </p>

        <dl className="mt-10 space-y-6">
          <div>
            <dt className="text-xs uppercase tracking-wide text-neutral-500">
              Téléphone
            </dt>
            <dd className="mt-1">
              <a
                href={`tel:${siteConfig.phone}`}
                className="font-serif text-2xl text-gold-ink hover:underline"
              >
                {siteConfig.phoneDisplay}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-neutral-500">
              Email
            </dt>
            <dd className="mt-1">
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-serif text-2xl text-gold-ink hover:underline"
              >
                {siteConfig.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-neutral-500">
              Adresse
            </dt>
            <dd className="mt-1 text-neutral-700">
              Monaco, Principauté de Monaco
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-neutral-500">
              WhatsApp
            </dt>
            <dd className="mt-1">
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-2xl text-gold-ink hover:underline"
              >
                Contacter via WhatsApp
              </a>
            </dd>
          </div>
        </dl>
      </section>
    </>
  );
}
