import type { Playlist } from "../../data/playlists";

type PlaylistDetailsHeroProps = {
  playlist: Playlist;
};

const PlaylistDetailsHero = ({ playlist }: PlaylistDetailsHeroProps) => {
  return (
    <div className="max-w-4xl mx-auto text-center py-16">
      <span className="inline-block rounded-full bg-yellow-400/10 px-4 py-2 text-sm font-medium text-yellow-400">
        📚 Programming Playlist
      </span>
      <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
        {playlist.title}
      </h2>
      <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-zinc-400">
        {playlist.description}
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <span className="rounded-full bg-zinc-800 px-4 py-2 text-sm">
          {playlist.level}
        </span>
        <span className="rounded-full bg-zinc-800 px-4 py-2 text-sm">
          {playlist.category}
        </span>
        <span className="rounded-full bg-zinc-800 px-4 py-2 text-sm">
          {playlist.videos} Videos
        </span>
      </div>
      <button className="mt-10 rounded-lg bg-yellow-400 px-8 py-3 font-semibold text-black transition-colors hover:bg-yellow-500">
        {" "}
        ▶ Watch Playlist
      </button>
    </div>
  );
};

export default PlaylistDetailsHero;
