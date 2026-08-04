import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import TestimonialCard from "../testimonials/TestimonialCard";

import testimonials from "../../data/testimonials";

function Testimonials() {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionTitle
          subtitle="Client Love"
          title="What Our Clients Say"
          align="center"
        />

        <p className="mb-12 text-center text-zinc-600">
          ⭐ 4.9 / 5 Average Rating from 500+ Happy Clients
        </p>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <TestimonialCard
              key={item.id}
              testimonial={item}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;