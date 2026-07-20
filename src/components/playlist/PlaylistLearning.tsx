import { CheckCircle } from "lucide-react";
import type { Playlist } from "../../data/playlists";

type PlaylistLearningProps = {
  playlist: Playlist;
};

export const PlaylistLearning = ({ playlist }: PlaylistLearningProps) => {
  return (
    <section className="py-16">
      <h2>What You'll Learn</h2>
      <p className="mt-4 text-zinc-400 leading-7">
        By the end of this playlist, you'll have a strong understanding of the
        key concepts and practical skills covered in each lesson.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {playlist.learningPoints.map((learn) => (
          <div
            key={learn}
            className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900 p-4"
          >
            <CheckCircle size={18} className="text-yellow-400" />
            <span>{learn}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
