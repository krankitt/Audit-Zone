import { Search } from "lucide-react";
import { playlistCategories } from "../../data/playlists";

type PlaylistFilter = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  filterCount: number;
};

const PlaylistFilter = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  filterCount,
}: PlaylistFilter) => {
  return (
    <div className="mt-16 mx-auto max-w-xl">
      <div className="relative">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
        />
        <input
          type="text"
          placeholder="Search playlists..."
          className="w-full rounded-xl border border-zinc-700 bg-zinc-900 py-3 pl-12 pr-5 text-white outline-none transition-colors focus:border-yellow-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="mt-8 text-center">
        <p className="text-zinc-400 text-sm">
          {filterCount} Playlist
          {filterCount !== 1 && "s"} Found {" • "}
          {selectedCategory === "All" ? "All Categories" : selectedCategory}
        </p>
      </div>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {playlistCategories.map((category) => {
          return (
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
          );
        })}
      </div>
    </div>
  );
};

export default PlaylistFilter;
