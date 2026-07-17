import { Link } from "react-router-dom";
import type { Playlist } from "../../data/playlists";

type PlaylistCardProps = {
  playlist: Playlist;
};

const PlaylistCard = ({ playlist }: PlaylistCardProps) => {
  return (
    <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400/60">
      <span className="inline-block rounded-full bg-yellow-400/10 px-3 py-1 text-sm text-yellow-400">
        {playlist.level}
      </span>
      <h3 className="mt-5 text-2xl font-bold text-white">{playlist.title}</h3>
      <p className="mt-3 text-zinc-400 leading-7">{playlist.description}</p>
      <p className="mt-5 text-sm text-zinc-500">{playlist.videos} Videos</p>
      <Link
        className="mt-6 font-semibold text-yellow-400 cursor-pointer hover:underline"
        to={playlist.id}
      >
        View Playlist →
      </Link>
    </div>
  );
};

export default PlaylistCard;
