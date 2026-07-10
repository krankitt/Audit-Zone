import Container from "../../ui/Container";
import { categories } from "../../../data/categories";

const Categories = () => {
  return (
    <section className="bg-zinc-950 py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">
            Choose Your Learning Path
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            Browse tutorials organized by technology and start learning at your
            own pace.
          </p>
        </div>
        <div className="mt-14 grid grid-cols sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.title}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-yellow-400/60 hover:-translate-y-2 transition-all hover:shadow-xl hover:shadow-yellow-500/10 duration-300 cursor-pointer"
            >
              <h3 className="text-2xl font-bold text-white">
                {category.title}
              </h3>
              <p className="mt-2 text-zinc-400">{category.videos}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Categories;
