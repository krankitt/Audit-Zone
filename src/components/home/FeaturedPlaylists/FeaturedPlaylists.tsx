import Container from "../../ui/Container";
import { featuredPlaylists } from "../../../data/featuredPlaylists";
import { ArrowBigRight } from "lucide-react";

const FeaturedPlaylists = () => {
  return (
    <section id="featured-playlists" className="bg-zinc-950 py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">Featured Playlists</h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            Start learning with our most popular programming playlists.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPlaylists.map((playlist) => (
            <div
              key={playlist.title}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-yellow-400/60 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <span className="inline-block bg-yellow-400/10 text-yellow-400 text-sm px-3 py-1 rounded-full">
                {playlist.level}
              </span>
              <h3 className="mt-6 text-2xl font-bold text-white">
                {playlist.title}
              </h3>
              <p className="mt-2 text-zinc-400">{playlist.videos}</p>
              <button className="group mt-6 flex items-center gap-2 text-yellow-400 font-semibold hover:underline cursor-pointer">
                Watch Playlist
                <ArrowBigRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedPlaylists;
