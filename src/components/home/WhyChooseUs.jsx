import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import whyChooseUs from "../../data/whyChooseUs";

function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionTitle
          subtitle="Why Choose Us"
          title="Experience Astrology With Confidence"
          align="center"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="rounded-3xl border border-stone-200 bg-[#F8F6F2] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <Icon size={30} />
                </div>

                <h3 className="mb-4 text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="leading-7 text-zinc-600">
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

export default WhyChooseUs;