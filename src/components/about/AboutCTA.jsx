import Container from "../common/Container";
import Button from "../common/Button";

function AboutCTA() {
  return (
    <section className="bg-[#1D1B1A] py-28 text-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="uppercase tracking-[0.35em] text-amber-400">
            Start Your Journey
          </p>

          <h2 className="mt-6 text-5xl font-light leading-tight">
            Ready To Discover
            <br />
            Your True Potential?
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-300">
            Whether you're seeking clarity in relationships,
            career, or personal growth, we're here to guide
            you with wisdom and compassion.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Button to="/booking">
              Book a Session
            </Button>

            <Button
              to="/contact"
              className="border border-white bg-transparent text-white hover:bg-white hover:text-black"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutCTA;