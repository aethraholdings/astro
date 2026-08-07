import Container from "../common/Container";

function BookingHero() {
  return (
    <section className="bg-black py-28 text-white">
      <Container>
        <p className="uppercase tracking-[0.35em] text-amber-400">
          BOOK SESSION
        </p>

        <h1 className="mt-6 text-6xl font-light">
          Schedule Your
          <br />
          Consultation
        </h1>

        <p className="mt-8 max-w-xl text-lg text-zinc-300">
          Select your preferred service, choose a suitable
          date and time, and begin your journey toward
          greater clarity and confidence.
        </p>
      </Container>
    </section>
  );
}

export default BookingHero;