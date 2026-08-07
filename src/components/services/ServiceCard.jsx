import { Clock, ArrowRight } from "lucide-react";
import Button from "../common/Button";

function ServiceCard({ service }) {
  return (
    <div className="group overflow-hidden rounded-[32px] bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-8">
        <span className="rounded-full bg-amber-100 px-3 py-1 text-sm text-amber-700">
          {service.category}
        </span>

        <h3 className="mt-5 text-2xl font-semibold">
          {service.title}
        </h3>

        <p className="mt-4 leading-7 text-zinc-600">
          {service.description}
        </p>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-zinc-500">
            <Clock size={18} />
            {service.duration}
          </div>

          <div className="text-2xl font-bold text-amber-700">
            {service.price}
          </div>
        </div>

        <div className="mt-8 flex justify-between">
          <Button to={`/services/${service.slug}`}>
            Learn More
          </Button>

          <Button to="/booking">
            Book
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;