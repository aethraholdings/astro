import Container from "../common/Container";

function ContactHero() {
  return (
    <section className="bg-[#F5F3EF] py-24 md:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-amber-700">
              Get In Touch
            </p>

            <h1 className="mt-6 max-w-2xl text-5xl font-light leading-[1.05] md:text-6xl lg:text-7xl">
              Let's Begin Your
              <br />
              Cosmic Journey
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-600">
              Have a question about astrology, tarot, numerology,
              or one of our consultations? We'd love to hear from
              you.
            </p>
          </div>

          <div className="overflow-hidden rounded-[32px]">
            <img
              src="/images/contact/contact-hero.png"
              alt="Astrology consultation"
              className="h-[420px] w-full object-cover md:h-[500px]"
            />
          </div>

        </div>
      </Container>
    </section>
  );
}

export default ContactHero;