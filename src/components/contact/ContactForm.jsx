import { useState } from "react";
import { Send } from "lucide-react";
import Container from "../common/Container";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    setSubmitted(true);

    console.log("Contact form submitted:", formData);
  }

  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          
          {/* LEFT SIDE */}
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-700">
              Send A Message
            </p>

            <h2 className="mt-5 text-4xl font-light leading-tight md:text-5xl">
              Ready for some
              <br />
              cosmic clarity?
            </h2>

            <p className="mt-6 max-w-md leading-8 text-zinc-600">
              Fill out the form and tell us what is on your mind.
              Our team will get back to you as soon as possible.
            </p>

            <div className="mt-10 border-l border-amber-600 pl-5">
              <p className="text-sm text-zinc-500">
                Typical response time
              </p>

              <p className="mt-1 font-medium">
                Within 24–48 hours
              </p>
            </div>
          </div>

          {/* FORM */}
          <div>
            {submitted ? (
              <div className="rounded-[30px] bg-[#F5F3EF] p-10 text-center md:p-16">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-2xl">
                  ✓
                </div>

                <h3 className="mt-6 text-3xl font-light">
                  Message Received
                </h3>

                <p className="mx-auto mt-4 max-w-md leading-7 text-zinc-600">
                  Thank you for reaching out. We've received your
                  message and will get back to you shortly.
                </p>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      firstName: "",
                      lastName: "",
                      email: "",
                      phone: "",
                      subject: "",
                      message: "",
                    });
                  }}
                  className="mt-8 rounded-full bg-black px-8 py-3 text-sm text-white"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-[30px] border border-stone-200 bg-[#FAFAF8] p-6 md:p-10"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  
                  <div>
                    <label className="mb-2 block text-sm">
                      First Name *
                    </label>

                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Your first name"
                      className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3.5 outline-none transition focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm">
                      Last Name
                    </label>

                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Your last name"
                      className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3.5 outline-none transition focus:border-black"
                    />
                  </div>

                </div>

                <div className="mt-6">
                  <label className="mb-2 block text-sm">
                    Email *
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3.5 outline-none transition focus:border-black"
                  />
                </div>

                <div className="mt-6">
                  <label className="mb-2 block text-sm">
                    Phone
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3.5 outline-none transition focus:border-black"
                  />
                </div>

                <div className="mt-6">
                  <label className="mb-2 block text-sm">
                    What can we help you with? *
                  </label>

                  <select
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3.5 outline-none transition focus:border-black"
                  >
                    <option value="">
                      Select a topic
                    </option>

                    <option value="astrology">
                      Astrology Reading
                    </option>

                    <option value="tarot">
                      Tarot Reading
                    </option>

                    <option value="numerology">
                      Numerology
                    </option>

                    <option value="compatibility">
                      Relationship Compatibility
                    </option>

                    <option value="career">
                      Career Guidance
                    </option>

                    <option value="vastu">
                      Vastu Consultation
                    </option>

                    <option value="other">
                      Other
                    </option>
                  </select>
                </div>

                <div className="mt-6">
                  <label className="mb-2 block text-sm">
                    Message *
                  </label>

                  <textarea
                    name="message"
                    required
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us a little about what you'd like guidance with..."
                    className="w-full resize-none rounded-xl border border-stone-300 bg-white px-4 py-3.5 outline-none transition focus:border-black"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-black px-7 py-4 text-sm text-white transition hover:bg-zinc-800"
                >
                  Send Message
                  <Send size={16} />
                </button>

                <p className="mt-4 text-center text-xs leading-5 text-zinc-500">
                  By submitting this form, you agree to be
                  contacted regarding your enquiry.
                </p>
              </form>
            )}
          </div>

        </div>
      </Container>
    </section>
  );
}

export default ContactForm;