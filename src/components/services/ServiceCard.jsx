import { ArrowRight } from "lucide-react";
import Button from "../common/Button";

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <div className="group rounded-3xl border border-stone-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-amber-700">
        <Icon size={30} />
      </div>

      <h3 className="mb-4 text-2xl font-medium">
        {service.title}
      </h3>

      <p className="mb-8 leading-7 text-zinc-600">
        {service.description}
      </p>

      <Button
        to="/services"
        className="bg-transparent px-0 text-black hover:bg-transparent hover:text-amber-700"
      >
        Learn More
        <ArrowRight size={18} className="ml-2" />
      </Button>
    </div>
  );
}

export default ServiceCard;