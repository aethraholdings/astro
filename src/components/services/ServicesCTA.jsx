import Container from "../common/Container";
import Button from "../common/Button";

function ServicesCTA() {
  return (
    <section className="bg-[#1A1715] py-28 text-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="uppercase tracking-[0.35em] text-amber-400">
            Ready To Begin?
          </p>

          <h2 className="mt-6 text-5xl font-light leading-tight">
            Discover Your Path
            <br />
            With Expert Guidance
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-300">
            Whether you're seeking answers about your career,
            relationships, or personal growth, we're here to
            help you move forward with clarity and confidence.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">
            <Button to="/booking">
              Book Consultation
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

export default ServicesCTA;