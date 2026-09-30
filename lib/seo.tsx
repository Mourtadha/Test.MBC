import type { Metadata } from "next";
import { siteConfig } from "./site";

type BuildMetadataArgs = {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
};

/** Build page metadata with canonical URL + Open Graph/Twitter defaults. */
export function buildMetadata({
  title,
  description,
  path,
  image = "/assets/images/og-default.svg",
  noIndex = false,
}: BuildMetadataArgs): Metadata {
  const url = new URL(path, siteConfig.url).toString();

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "fr_FR",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

/** LocalBusiness JSON-LD shared across the site (rendered once in the root layout). */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.url}/assets/images/og-default.svg`,
    priceRange: "€€€€",
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.locality,
      addressCountry: siteConfig.address.country,
    },
    areaServed: siteConfig.coverageAreas.map((name) => ({
      "@type": "Place",
      name,
    })),
    sameAs: siteConfig.sameAs,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteConfig.url).toString(),
    })),
  };
}

export function vehicleJsonLd(vehicle: {
  slug: string;
  name: string;
  description: string;
  image: string;
  seats: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: vehicle.name,
    description: vehicle.description,
    image: new URL(vehicle.image, siteConfig.url).toString(),
    brand: { "@type": "Brand", name: "Mercedes-Benz" },
    url: new URL(`/vehicules/${vehicle.slug}`, siteConfig.url).toString(),
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "EUR",
      seller: {
        "@type": "LocalBusiness",
        name: siteConfig.name,
      },
    },
  };
}

export function aggregateRatingJsonLd(
  testimonials: { rating: number }[],
) {
  const count = testimonials.length;
  const average =
    testimonials.reduce((sum, t) => sum + t.rating, 0) / count;

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: average.toFixed(1),
      reviewCount: count,
    },
    review: testimonials.map((t) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
      },
    })),
  };
}

/** JSON-LD `<script>` component to inline structured data safely. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
