import { useState } from "react";
import { Plus } from "lucide-react";

import Container from "../common/Container";

const faqs = [
  {
    question: "How quickly will I receive a response?",
    answer:
      "We generally respond to enquiries within 24–48 hours. Response times may vary slightly during busy periods.",
  },
  {
    question: "Do you offer online consultations?",
    answer:
      "Yes. Our consultations can be conducted online, allowing you to connect with us from anywhere.",
  },
  {
    question: "What information should I provide for an astrology reading?",
    answer:
      "For most birth-chart based readings, your date of birth, exact or approximate birth time, and place of birth are useful.",
  },
  {
    question: "Can I contact you before booking?",
    answer:
      "Absolutely. If you're unsure which service is right for you, send us a message and we'll help you choose.",
  },
  {
    question: "Can I reschedule my consultation?",
    answer:
      "Rescheduling is possible according to our booking and cancellation policy. Please contact us as early as possible if you need to make a change.",
  },
];

function ContactFAQ() {
  const [active, setActive] = useState(null);

  function toggle(index) {
    setActive(active === index ? null : index);
  }

  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mx-auto max-w-4xl">
          
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-700">
              Frequently Asked Questions
            </p>

            <h2 className="mt-5 text-4xl font-light md:text-5xl">
              Before You Reach Out
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-zinc-600">
              Here are answers to some of the questions we hear
              most often.
            </p>
          </div>

          <div className="mt-14">
            {faqs.map((faq, index) => {
              const isOpen = active === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-stone-200"
                >
                  <button
                    onClick={() => toggle(index)}
                    className="flex w-full items-center justify-between gap-6 py-7 text-left"
                  >
                    <span className="text-lg font-medium md:text-xl">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-stone-300 transition ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      <Plus size={18} />
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] pb-7"
                        : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-3xl leading-8 text-zinc-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
}

export default ContactFAQ;