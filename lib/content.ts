export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: "plane" | "train" | "clock" | "sparkles" | "route" | "anchor";
};

export const services: Service[] = [
  {
    slug: "transfert-aeroport",
    title: "Transfert Aéroport",
    description:
      "Nice NCE, Cannes, héliport Monaco. Suivi des vols en temps réel.",
    icon: "plane",
  },
  {
    slug: "transfert-gare",
    title: "Transfert Gare",
    description: "Prise en charge aux principales gares de la Côte d'Azur.",
    icon: "train",
  },
  {
    slug: "mise-a-disposition",
    title: "Mise à Disposition",
    description: "Votre chauffeur privé à la journée ou demi-journée.",
    icon: "clock",
  },
  {
    slug: "evenements-soirees",
    title: "Événements & Soirées",
    description: "Grand Prix, galas, mariages, événements d'entreprise.",
    icon: "sparkles",
  },
  {
    slug: "longue-distance",
    title: "Longue Distance",
    description: "Transferts vers Milan, Paris, Genève et toute l'Europe.",
    icon: "route",
  },
  {
    slug: "croisieres-yachts",
    title: "Croisières & Yachts",
    description: "Ports de Monaco, Nice, Cannes et Antibes.",
    icon: "anchor",
  },
];

export type Testimonial = {
  name: string;
  location: string;
  rating: number;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Alessandro R.",
    location: "Milan, Italie",
    rating: 5,
    quote:
      "Service impeccable. Ponctualité parfaite et véhicule immaculé pour notre transfert aéroport.",
  },
  {
    name: "Sophie M.",
    location: "Paris, France",
    rating: 5,
    quote:
      "Grand Prix de Monaco. Discrétion totale, professionnalisme exemplaire. La Maybach était somptueuse.",
  },
  {
    name: "James W.",
    location: "London, UK",
    rating: 5,
    quote:
      "Driver tracked our flight despite a 45-min delay. Excellent service from start to finish.",
  },
];

export const whyChooseUs = [
  {
    title: "Ponctualité garantie",
    description:
      "Nous suivons vos vols en temps réel et adaptons nos horaires.",
  },
  {
    title: "Discrétion absolue",
    description: "Confidentialité totale pour tous nos clients.",
  },
  {
    title: "Véhicules premium",
    description:
      "Flotte immaculée, entretenue aux plus hauts standards de luxe.",
  },
  {
    title: "Disponible 24h/24",
    description: "Notre équipe est joignable à toute heure, 7 jours sur 7.",
  },
];
