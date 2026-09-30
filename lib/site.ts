export const siteConfig = {
  name: "Monaco Black Cars",
  legalName: "Monaco Black Cars",
  tagline: "Votre Chauffeur Privé à Monaco",
  description:
    "Service de chauffeur privé de luxe à Monaco et sur la Côte d'Azur : transferts aéroport, gares, mise à disposition, événements et longue distance. Disponible 24h/24, 7j/7.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.monacoblackcar.mc",
  phone: "+33767237608",
  phoneDisplay: "+337 67 23 76 08",
  email: "info@monacoblackcar.mc",
  whatsapp:
    "https://wa.me/33767237608?text=Bonjour%2C%20je%20souhaite%20r%C3%A9server%20un%20chauffeur%20priv%C3%A9%20%C3%A0%20Monaco.",
  address: {
    locality: "Monaco",
    country: "Monaco",
  },
  sameAs: [] as string[],
  stats: [
    { value: "10+", label: "Années d'expérience" },
    { value: "5 000+", label: "Clients satisfaits" },
    { value: "4", label: "Véhicules premium" },
    { value: "24/7", label: "Disponibilité" },
  ],
  coverageAreas: [
    "Aéroport de Nice",
    "Héliport Monaco",
    "Port de Monaco",
    "Monte-Carlo",
    "Cannes",
    "Antibes",
    "Milan",
    "Genève",
    "Courchevel",
    "Paris",
  ],
};

export const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/vehicules", label: "Véhicules" },
  { href: "/services", label: "Services" },
  { href: "/chauffeur", label: "Chauffeur" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/a-propos", label: "À Propos" },
  { href: "/contact", label: "Contact" },
];

export const footerLinks = {
  services: [
    { href: "/vehicules", label: "Véhicules" },
    { href: "/services", label: "Services" },
    { href: "/tarifs", label: "Tarifs" },
    { href: "/chauffeur", label: "Chauffeur" },
  ],
  company: [
    { href: "/a-propos", label: "À Propos" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/privacy", label: "Politique de confidentialité" },
    { href: "/terms", label: "Conditions d'utilisation" },
  ],
};
