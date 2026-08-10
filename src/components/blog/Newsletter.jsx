import { useState } from "react";
import Container from "../common/Container";
import { Mail } from "lucide-react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (!email.trim()) return;

    setSubmitted(true);
    setEmail("");
  }

  return (
    <section className="bg-[#F8F6F2] py-24">
      <Container>
        <div className="mx-auto max-w-3xl rounded-[36px] bg-[#1A1715] px-6 py-14 text-center text-white md:px-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/20">
            <Mail className="text-amber-400" size={28} />
          </div>

          <h2 className="mt-7 text-4xl font-light md:text-5xl">
            Wisdom, Delivered
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-8 text-zinc-300">
            Receive thoughtful astrology insights, new articles,
            and spiritual guidance directly in your inbox.
          </p>

          {submitted ? (
            <div className="mt-8 rounded-2xl bg-white/10 p-5 text-amber-300">
              Thank you! You're now subscribed.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                className="min-w-0 flex-1 rounded-full bg-white px-6 py-4 text-black outline-none"
              />

              <button
                type="submit"
                className="rounded-full bg-amber-600 px-7 py-4 font-medium transition hover:bg-amber-700"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}

export default Newsletter;