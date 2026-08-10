import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../common/Container";

function ContactCTA() {
  return (
    <section className="bg-[#1A1715] py-24 text-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          
          <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
            Ready When You Are
          </p>

          <h2 className="mt-6 text-4xl font-light leading-tight md:text-5xl lg:text-6xl">
            Sometimes the answers
            <br />
            begin with a question.
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-8 text-zinc-300">
            If you're ready to explore your chart, your
            relationships, your career, or your next chapter,
            we're here to guide you.
          </p>

          <Link
            to="/booking"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-green px-8 py-4 text-sm text-red "
          >
            Book a Consultation
            <ArrowUpRight size={17} />
          </Link>

        </div>
      </Container>
    </section>
  );
}

export default ContactCTA;