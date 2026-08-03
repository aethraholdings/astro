import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import ServiceCard from "../services/ServiceCard";

import services from "../../data/services";

function ServicesPreview() {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionTitle
          subtitle="Our Services"
          title="Discover the Guidance You Need"
          align="center"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
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

export default ServicesPreview;