import Container from "../common/Container";
import Button from "../common/Button";

function BlogCTA() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="rounded-[36px] bg-amber-50 px-6 py-16 text-center md:px-12">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-700">
            Need Personal Guidance?
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-light md:text-5xl">
            Sometimes the best answers begin with a conversation.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-zinc-600">
            If you have questions about your relationships,
            career, future, or personal journey, book a
            personalized consultation with our astrologer.
          </p>

          <div className="mt-9">
            <Button to="/booking">
              Book a Consultation
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default BlogCTA;