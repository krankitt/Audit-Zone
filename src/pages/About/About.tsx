import { CheckCircle } from "lucide-react";
import Container from "../../components/ui/Container";

const About = () => {
  const highlights = [
    "Beginner Friendly",
    "Project Based Learning",
    "Free YouTube Content",
    "Consistent Updates",
  ];

  const stats = [
    { value: "300+", label: "Videos" },
    { value: "15+", label: "Playlists" },
    { value: "100%", label: "Free" },
  ];

  return (
    <section className="bg-zinc-950 py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          <div>
            <span className="inline-block bg-yellow-400/10 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium">
              🏷 About Audit Zone
            </span>
            <h1 className="mt-6 text-4xl lg:text-5xl font-bold text-white leading-tight">
              Helping Developers Learn Programming the Practical Way
            </h1>
            <p className="mt-4 text-zinc-400 leading-8">
              We create high-quality programming tutorials focused on real-world
              projects and clear explanations.
            </p>
            <ul className="mt-8 space-y-4">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-zinc-300 font-medium"
                >
                  <CheckCircle className="text-yellow-400" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-lg rounded-3xl border border-zinc-800 bg-zinc-900 p-10 hover:border-yellow-400/40 trasition-all duration-300">
              <h1 className="text-2xl font-bold text-white">🎯 Our Mission</h1>
              <p className="mt-4 text-zinc-400 leading-7">
                Making programming education simple, practical and completely
                free for everyone.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <h3 className="text-3xl font-bold text-yellow-400">
                      {stat.value}
                    </h3>
                    <p className="mt-1 text-zinc-400">{stat.label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-10 text-center italic text-zinc-400">
                "Learning never stops. Keep building."
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
