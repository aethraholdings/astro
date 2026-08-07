import Container from "../common/Container";
import Button from "../common/Button";
import heroImage from "../../assets/images/service-hero.jpg";

function ServiceHero() {
  return (
    <section className="bg-[#F8F6F2] py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-4 uppercase tracking-[0.35em] text-amber-600">
              Our Services
            </p>

            <h1 className="mb-8 text-5xl font-light leading-tight lg:text-6xl">
              Personalized
              <br />
              Astrology
              <br />
              Services
            </h1>

            <p className="mb-10 text-lg leading-8 text-zinc-600">
              Discover personalized guidance through astrology, tarot,
              numerology, and spiritual consultations designed to help
              you navigate life with clarity and confidence.
            </p>

            <Button to="/booking">
              Book Consultation
            </Button>
          </div>

          <div>
            <img
              src={heroImage}
              alt="Astrology Services"
              className="rounded-[40px] shadow-2xl"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ServiceHero;