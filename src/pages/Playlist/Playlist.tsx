import { useState } from "react";
import Container from "../../components/ui/Container";
import { playlists } from "../../data/playlists";
import PlaylistCard from "../../components/cards/PlaylistCard";
import PlaylistHero from "../../components/playlist/PlaylistHero";
import PlaylistFilter from "../../components/playlist/PlaylistFilter";
import EmptyPlaylist from "../../components/playlist/EmptyPlaylist";

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
        <PlaylistHero />
        <PlaylistFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          filterCount={filteredPlaylists.length}
        />
        {filteredPlaylists.length > 0 ? (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlaylists.map((playlist) => (
              <PlaylistCard key={playlist.id} playlist={playlist} />
            ))}
          </div>
        ) : (
          <EmptyPlaylist />
        )}
      </Container>
    </section>
  );
};

export default Playlist;
