import { Search } from "lucide-react";
import Container from "../common/Container";
import { categories } from "../../data/blog";

function CategoryFilter({
  activeCategory,
  setActiveCategory,
  searchTerm,
  setSearchTerm,
}) {
  return (
    <section className="bg-[#F8F6F2] py-10">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm transition ${
                  activeCategory === category
                    ? "bg-black text-white"
                    : "border border-stone-300 bg-white hover:border-black"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:max-w-xs">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
            />

            <input
              type="search"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(event.target.value)
              }
              className="w-full rounded-full border border-stone-300 bg-white py-3 pl-11 pr-5 outline-none transition focus:border-amber-600"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CategoryFilter;