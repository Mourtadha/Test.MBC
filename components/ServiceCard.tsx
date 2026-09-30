import type { Service } from "@/lib/content";

const icons: Record<Service["icon"], React.ReactNode> = {
  plane: (
    <path d="M10.5 21 12 17l1.5 4M2 12l20-8-8 20-2.5-8L2 12Z" />
  ),
  train: (
    <>
      <rect x="5" y="3" width="14" height="14" rx="3" />
      <path d="M8 21h8M9 17v.01M15 17v.01M5 10h14" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </>
  ),
  sparkles: (
    <path d="M12 3v4M12 17v4M4 12h4M16 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
  ),
  route: (
    <>
      <circle cx="6" cy="19" r="2" />
      <circle cx="18" cy="5" r="2" />
      <path d="M8 19h6a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4h-2" />
    </>
  ),
  anchor: (
    <>
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v14M5 12H2a10 10 0 0 0 10 9 10 10 0 0 0 10-9h-3" />
    </>
  ),
};

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="card-hover rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm shadow-neutral-900/5">
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-gold-ink"
        aria-hidden="true"
      >
        {icons[service.icon]}
      </svg>
      <h3 className="mt-4 font-serif text-lg text-neutral-900">{service.title}</h3>
      <p className="mt-2 text-sm text-neutral-600">{service.description}</p>
    </article>
  );
}
