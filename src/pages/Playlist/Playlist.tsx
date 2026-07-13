import { useState } from "react";
import Container from "../../components/ui/Container";
import { playlistCategories, playlists } from "../../data/playlists";

const Playlist = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPlaylists = playlists.filter((playLists) => {
    const matchedSearch = playLists.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchedCategory =
      selectedCategory === "All" || playLists.category === selectedCategory;
    return matchedSearch && matchedCategory;
  });

  return (
    <section className="bg-zinc-950 py-20 min-h-screen">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block rounded-full bg-yellow-400/10 px-4 py-2 text-sm font-medium text-yellow-400">
            📚 Programming Playlists
          </span>
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            All Programming <br />
            <span className="text-yellow-400">Playlists in One Place</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-zinc-400">
            Explore Java, React, JavaScript, DSA and Web Development playlists
            designed to help you learn step by step.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="rounded-lg bg-yellow-400 px-6 py-3 font-semibold text-black cursor-pointer transition-colors hover:bg-yellow-500">
              Explore Categories
            </button>
            <button className="rounded-lg border border-zinc-700 px-6 py-3 font-semibold text-white transition-colors cursor-pointer hover:border-yellow-400 hover:text-yellow-400">
              Visit YouTube
            </button>
          </div>
        </div>
        <div className="mt-16 mx-auto max-w-xl">
          <input
            type="text"
            placeholder="Search playlists..."
            className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-3 text-white outline-none transition-colors focus:border-yellow-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {playlistCategories.map((category) => (
              <button
                onClick={() => setSelectedCategory(category)}
                key={category}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-yellow-400 text-black"
                    : "border border-zinc-700 text-white hover:border-yellow-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        {filteredPlaylists.length > 0 ? (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlaylists.map((playlist) => (
              <div
                key={playlist.id}
                className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400/60"
              >
                <span className="inline-block rounded-full bg-yellow-400/10 px-3 py-1 text-sm text-yellow-400">
                  {playlist.level}
                </span>
                <h3 className="mt-5 text-2xl font-bold text-white">
                  {playlist.title}
                </h3>
                <p className="mt-3 text-zinc-400 leading-7">
                  {playlist.description}
                </p>
                <p className="mt-5 text-sm text-zinc-500">
                  {playlist.videos} Videos
                </p>
                <button className="mt-6 font-semibold text-yellow-400 cursor-pointer hover:underline">
                  View Playlist →
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-16 rounded-2xl border border-zinc-800 bg-zinc-900 p-12 text-center">
            <h3 className="text-2xl font-bold text-white">
              No Playlists Found
            </h3>
            <p className="mt-3 text-zinc-400">
              Try another search keyword or select another category.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Playlist;
