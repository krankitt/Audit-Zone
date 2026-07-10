import { BookOpen, CircleDollarSign, Code2, GraduationCap } from "lucide-react";
import Container from "../../ui/Container";
import { whyChoose } from "../../../data/whyChoose";

const WhyChoose = () => {
  const icons = [
    <BookOpen size={28} />,
    <Code2 size={28} />,
    <GraduationCap size={28} />,
    <CircleDollarSign size={28} />,
  ];
  return (
    <section className="bg-zinc-950 py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">
            Why choose Audit Zone ?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-zinc-400">
            Everything you need to become a better programmer, organized into
            practical and beginner-friendly playlists.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChoose.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-yellow-400/60 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-yellow-400">{icons[index]}</div>
              <h3 className="mt-5 text-xl font-bold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-zinc-400 leading-7">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChoose;
