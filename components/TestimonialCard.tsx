import type { Testimonial } from "@/lib/content";

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="card-hover rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm shadow-neutral-900/5">
      <div aria-hidden="true" className="text-gold-ink">
        {"★".repeat(testimonial.rating)}
      </div>
      <blockquote className="mt-3 text-sm text-neutral-700">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-4 text-sm font-semibold text-neutral-900">
        {testimonial.name}
        <span className="block text-xs font-normal text-neutral-500">
          {testimonial.location}
        </span>
      </figcaption>
    </figure>
  );
}
