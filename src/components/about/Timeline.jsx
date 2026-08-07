import { timeline } from "../../data/about";
import Container from "../common/Container";

function Timeline() {
  return (
    <section className="bg-[#F8F6F2] py-24">
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <p className="uppercase tracking-[0.3em] text-amber-600">
              Our Journey
            </p>

            <h2 className="mt-4 text-5xl font-light">
              Milestones Along
              <br />
              The Way
            </h2>
          </div>

          <div className="relative border-l-2 border-amber-200 pl-10">
            {timeline.map((item) => (
              <div key={item.year} className="relative mb-14">
                <div className="absolute -left-[49px] top-2 h-6 w-6 rounded-full border-4 border-white bg-amber-600"></div>

                <span className="text-xl font-bold text-amber-600">
                  {item.year}
                </span>

                <h3 className="mt-2 text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 leading-8 text-zinc-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Timeline;