import Container from "../common/Container";
import Button from "../common/Button";
import hero from "../../assets/images/about-hero.jpg";

function AboutHero() {
  return (
    <section className="bg-[#F8F6F2] py-28">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          <div>

            <p className="uppercase tracking-[0.35em] text-amber-700 mb-4">
              ABOUT US
            </p>

            <h1 className="text-6xl font-light leading-tight mb-8">
              Guiding Lives
              <br />
              Through Ancient
              <br />
              Wisdom
            </h1>

            <p className="text-zinc-600 text-lg leading-8 mb-10">
              Crystal Blissed combines timeless Vedic wisdom with
              practical modern guidance, helping individuals discover
              clarity, confidence, and purpose.
            </p>

            <Button to="/booking">
              Book Consultation
            </Button>

          </div>

          <div>

            <img
              src={hero}
              alt="About"
              className="rounded-[40px] shadow-2xl"
            />

          </div>

        </div>
      </Container>
    </section>
  );
}

export default AboutHero;