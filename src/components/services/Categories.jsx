import Container from "../common/Container";

const categories = [
  "All",
  "Astrology",
  "Tarot",
  "Relationships",
  "Career",
  "Numerology",
  "Healing",
  "Vastu",
];

function Categories() {
  return (
    <section className="bg-white py-10">
      <Container>
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              className="rounded-full border border-stone-300 px-6 py-3 transition hover:bg-amber-600 hover:text-white"
            >
              {category}
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Categories;