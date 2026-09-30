export type Vehicle = {
  slug: string;
  name: string;
  category: "SEDAN" | "LUXURY" | "VAN" | "SUV";
  seats: number;
  luggage: number;
  color: string;
  image: string;
  shortDescription: string;
  description: string;
  features: string[];
};

export const vehicles: Vehicle[] = [
  {
    slug: "mercedes-classe-s",
    name: "Mercedes-Benz Classe S",
    category: "SEDAN",
    seats: 4,
    luggage: 3,
    color: "Noir Obsidien",
    image: "/assets/images/mercedes-classe-s.jpg",
    shortDescription:
      "L'icône du luxe automobile. La Classe S offre un confort et une technologie inégalés pour vos déplacements les plus importants.",
    description:
      "La Mercedes-Benz Classe S incarne l'excellence berline depuis des décennies. Sièges massants, éclairage d'ambiance, insonorisation exceptionnelle : chaque trajet devient un moment de sérénité, idéal pour vos rendez-vous d'affaires ou transferts aéroport.",
    features: [
      "Sièges cuir massants",
      "Wi-Fi à bord",
      "Climatisation multi-zone",
      "Eau et rafraîchissements offerts",
    ],
  },
  {
    slug: "mercedes-maybach",
    name: "Mercedes-Benz Maybach S 580",
    category: "LUXURY",
    seats: 4,
    luggage: 3,
    color: "Noir/Argent",
    image: "/assets/images/mercedes-maybach.jpg",
    shortDescription:
      "L'expression ultime du raffinement automobile. La Maybach redéfinit les standards du voyage en limousine avec ses finitions sur mesure.",
    description:
      "Réservée à une clientèle exigeante, la Maybach S 580 offre un espace arrière digne d'une suite privée : sièges inclinables avec repose-pieds, tables rétractables et silence absolu. Le choix par excellence pour le Grand Prix de Monaco ou vos événements les plus prestigieux.",
    features: [
      "Sièges arrière inclinables",
      "Vitres teintées renforcées",
      "Insonorisation acoustique premium",
      "Service de conciergerie",
    ],
  },
  {
    slug: "mercedes-classe-v",
    name: "Mercedes-Benz Classe V Luxury",
    category: "VAN",
    seats: 7,
    luggage: 7,
    color: "Noir",
    image: "/assets/images/classe-v.svg",
    shortDescription:
      "Idéal pour les groupes et les familles, la Classe V combine espace généreux, confort premium et élégance pour vos transferts collectifs.",
    description:
      "Pensée pour les familles et les groupes professionnels, la Classe V Luxury offre jusqu'à 7 places et un volume de bagages généreux, sans compromis sur le confort ni le style. Parfaite pour les transferts d'équipe ou les excursions en groupe sur la Côte d'Azur.",
    features: [
      "7 places modulables",
      "Grand volume de coffre",
      "Portes coulissantes électriques",
      "Sièges captain premium",
    ],
  },
  {
    slug: "tesla-model-y",
    name: "Tesla Model Y",
    category: "SUV",
    seats: 5,
    luggage: 4,
    color: "Noir",
    image: "/assets/images/tesla.svg",
    shortDescription:
      "L'alliance de la technologie et de l'écologie. La Tesla Model Y offre une expérience de conduite silencieuse et performante.",
    description:
      "Pour une clientèle soucieuse de son empreinte environnementale sans renoncer au luxe, la Tesla Model Y propose une conduite 100% électrique, silencieuse et high-tech, avec un espace intérieur spacieux et modulable.",
    features: [
      "100% électrique",
      "Toit panoramique en verre",
      "Écran tactile 15 pouces",
      "Autonomie longue distance",
    ],
  },
];

export function getVehicleBySlug(slug: string) {
  return vehicles.find((v) => v.slug === slug);
}
