import { playlists, type Playlist } from "../../data/playlists";
import PlaylistCard from "../cards/PlaylistCard";

type RelatedPlayListProps = {
  currentPlaylist: Playlist;
};

const RelatedPlaylists = ({ currentPlaylist }: RelatedPlayListProps) => {
  const relatedPlaylist = playlists
    .filter((playlist) => playlist.id !== currentPlaylist.id)
    .slice(0, 3);

  return (
    <section className="py-16">
      <h2>Related Playlists</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedPlaylist.map((playlist) => (
          <PlaylistCard key={playlist.id} playlist={playlist} />
        ))}
      </div>
    </section>
  );
};

export default RelatedPlaylists;
