import { Star } from "lucide-react";

function TestimonialCard({ testimonial }) {
  return (
    <div className="rounded-[32px] border border-stone-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="mb-6 flex gap-1">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className="fill-amber-500 text-amber-500"
          />
        ))}
      </div>

      <p className="mb-8 text-lg leading-8 text-zinc-600 italic">
        "{testimonial.review}"
      </p>

      <div>
        <h4 className="font-semibold">
          {testimonial.name}
        </h4>

        <p className="text-sm text-zinc-500">
          {testimonial.service}
        </p>
      </div>
    </div>
  );
}

export default TestimonialCard;