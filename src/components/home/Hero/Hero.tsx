import Container from "../../ui/Container";
import logo from "../../../assets/logo.jpeg";
import { Play } from "lucide-react";
import { heroPlaylists, heroStats } from "../../../data/heroPlaylists";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";

const Hero = () => {
  return (
    <section className="bg-zinc-950 py-12">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 min-h-[85vh]">
          <div className="max-w-2xl">
            <span className="inline-block bg-yellow-400/10 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium">
              🚀 Learn Programming Faster
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Master Programming <br /> Through Short &
              <span className="text-yellow-400"> Practical Tutorials</span>
            </h1>
            <p className="mt-6 text-lg text-zinc-400 leading-8 max-w-xl">
              Explore Java, React, JavaScript, DSA and Web Development through
              organized playlists.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to={ROUTES.PLAYLIST}
                className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
              >
                Explore Playlists
              </Link>
              <button className="border border-zinc-700 text-white px-6 py-3 rounded-lg hover:border-yellow-400 hover:text-yellow-400 transition-colors">
                Visit YouTube
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 w-full max-w-lg lg:max-w-lg shadow-2xl hover:border-yellow-400/40 transition-all duration-300">
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
                    className="flex items-center gap-3 rounded-lg bg-zinc-800 p-3 hover:bg-zinc-700 hover:translate-x-2 transition-all duration-300 cursor-pointer"
                  >
                    <Play size={18} className="text-yellow-400" />
                    <span className="text-white">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 grid grid-cols-3 gap-6">
                {heroStats.map((stat) => (
                  <div className="text-center" key={stat.label}>
                    <h3 className="text-3xl font-bold text-yellow-400">
                      {stat.value}
                    </h3>
                    <p className="text-zinc-400 mt-1">{stat.label}</p>
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
