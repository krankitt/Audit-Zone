import Container from "../../ui/Container";
import logo from "../../../assets/logo.jpeg";
import { Play } from "lucide-react";
import { heroPlaylists } from "../../../data/heroPlaylists";

const Hero = () => {
  return (
    <section className="bg-zinc-950 py-6">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 min-h-[85vh]">
          <div className="max-w-2xl">
            <span className="inline-block bg-yellow-400/10 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium">
              🚀 Learn Programming Faster
            </span>
            <h1 className="mt-6 text-5xl lg:text-6xl font-bold text-white leading-tight">
              Master Programming <br /> Through Short &
              <span className="text-yellow-400"> Practical Tutorials</span>
            </h1>
            <p className="mt-6 text-lg text-zinc-400 leading-8 max-w-xl">
              Explore Java, React, JavaScript, DSA and Web Development through
              organized playlists.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                Explore Playlists
              </button>
              <button className="border border-zinc-700 text-white px-6 py-3 rounded-lg hover:border-yellow-400 hover:text-yellow-400 transition-colors">
                Visit YouTube
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 w-full max-w-lg shadow-2xl">
              <div className="flex justify-center">
                <img
                  src={logo}
                  alt="Audit Zone Logo"
                  className="h-24 w-24 rounded-full"
                />
              </div>
              <h2 className="mt-6 text-center text-2xl font-bold text-white">
                Audit Zone
              </h2>
              <p className="mt-2 text-center text-zinc-400">
                Learn • Build • Grow
              </p>
              <div className="mt-8 space-y-3">
                {heroPlaylists.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-lg bg-zinc-800 p-3 hover:bg-zinc-700 transition-colors cursor-pointer"
                  >
                    <Play size={18} className="text-yellow-400" />{" "}
                    <span className="text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
