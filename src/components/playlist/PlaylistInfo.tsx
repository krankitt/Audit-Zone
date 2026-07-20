import type { Playlist } from "../../data/playlists";

type PlaylistInfoProps = {
  playlist: Playlist;
};

const PlaylistInfo = ({ playlist }: PlaylistInfoProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="text-white">
        <h1 className="text-2xl font-bold text-white">About this playlist</h1>
        <p className="mt-4 text-zinc-400 leading-7">{playlist.description}</p>
      </div>
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 mb-4">
        <h3 className="text-xl font-semibold text-white">Playlist Details</h3>
        <div className="mt-6 space-y-6">
          <div className="flex justify-between">
            <span className="text-zinc-400">Category</span>
            <span className="text-white">{playlist.category}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-400">Level</span>
            <span className="text-white">{playlist.level}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-400">Videos</span>
            <span className="text-white">{playlist.videos}</span>
          </div>
        </div>
        {/* <button
          onClick={() => window.open(playlist.playlistUrl, "_blank")}
          className="mt-8 w-full rounded-lg bg-yellow-400 py-3 text-black font-semibold hover:bg-yellow-500 transition-colors"
        >
          ▶ Watch Playlist
        </button> */}
      </div>
    </div>
  );
};

export default PlaylistInfo;
