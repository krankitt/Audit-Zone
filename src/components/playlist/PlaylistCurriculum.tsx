import type { Playlist } from "../../data/playlists";

type PlaylistCurriculumProps = {
  playlist: Playlist;
};

const PlaylistCurriculum = ({ playlist }: PlaylistCurriculumProps) => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-white">Playlist Curriculum</h2>
      <p className="mt-4 text-zinc-400 leading-7">
        Follow the lessons in order to build your understanding step by step.
      </p>
      <div className="mt-8 space-y-4">
        {playlist.lessons.map((less) => (
          <div
            key={less.id}
            className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900 p-5 hover:border-yellow-400/50 transition-colors"
          >
            <div className="flex items-center gap-5">
              <p>{less.id.toString().padStart(2, "0")}</p>
              <p>{less.title}</p>
            </div>
            <div>{less.duration}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlaylistCurriculum;
