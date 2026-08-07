import Container from "../common/Container";
import {
  ShieldCheck,
  Sparkles,
  HeartHandshake,
  Clock4,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Guidance",
    description:
      "Every consultation is based on authentic Vedic astrology principles and years of practical experience.",
  },
  {
    icon: Sparkles,
    title: "Personalized Sessions",
    description:
      "Every reading is tailored specifically to your birth details and personal goals.",
  },
  {
    icon: HeartHandshake,
    title: "Private & Confidential",
    description:
      "Your information and consultation remain completely confidential.",
  },
  {
    icon: Clock4,
    title: "Flexible Scheduling",
    description:
      "Book online and choose a convenient date and time that fits your schedule.",
  },
];

function WhyServices() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.35em] text-amber-600">
            Why Choose Us
          </p>

          <h2 className="mt-4 text-5xl font-light">
            Experience Guidance
            <br />
            You Can Trust
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[30px] border border-stone-200 bg-[#F8F6F2] p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                  <Icon className="text-amber-700" size={30} />
                </div>

                <h3 className="mb-4 text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="leading-8 text-zinc-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default WhyServices;