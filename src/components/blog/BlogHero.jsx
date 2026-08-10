import Container from "../common/Container";

function BlogHero() {
  return (
    <section className="bg-[#F8F6F2] py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-600">
            The Crystal Blissed Journal
          </p>

          <h1 className="mt-6 text-5xl font-light leading-tight md:text-6xl lg:text-7xl">
            Insights for Your
            <br />
            Journey Within
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-600">
            Explore astrology, tarot, numerology, relationships,
            spirituality, and practical guidance for navigating
            life's important moments.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default BlogHero;