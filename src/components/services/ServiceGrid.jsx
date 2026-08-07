import Container from "../common/Container";
import ServiceCard from "./ServiceCard";
import services from "../../data/services";

function ServiceGrid() {
  return (
    <section className="bg-[#F8F6F2] py-24">
      <Container>
        <div className="mb-16 text-center">
          <p className="uppercase tracking-[0.35em] text-amber-600">
            Featured Services
          </p>

          <h2 className="mt-4 text-5xl font-light">
            Find The Guidance
            <br />
            You Need
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ServiceGrid;