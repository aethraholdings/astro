import Container from "../common/Container";
import { statistics } from "../../data/about";

function Statistics() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-stone-200 p-10 text-center transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <h2 className="mb-3 text-5xl font-bold text-amber-600">
                {item.number}
              </h2>

              <p className="text-lg text-zinc-600">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Statistics;