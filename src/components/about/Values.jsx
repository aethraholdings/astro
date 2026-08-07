import { values } from "../../data/about";
import Container from "../common/Container";
import {
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  Target,
} from "lucide-react";

const icons = [
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  Target,
];

function Values() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-amber-600">
            Core Values
          </p>

          <h2 className="mt-4 text-5xl font-light">
            What Drives Us
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = icons[index];

            return (
              <div
                key={value.title}
                className="rounded-[32px] border border-stone-200 bg-[#F8F6F2] p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                  <Icon
                    className="text-amber-700"
                    size={30}
                  />
                </div>

                <h3 className="mb-4 text-2xl font-semibold">
                  {value.title}
                </h3>

                <p className="leading-8 text-zinc-600">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Values;