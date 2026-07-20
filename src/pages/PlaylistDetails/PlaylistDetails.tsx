import { useParams } from "react-router-dom";
import { playlists } from "../../data/playlists";
import Container from "../../components/ui/Container";
import PlaylistDetailsHero from "../../components/playlist/PlaylistDetailsHero";
import Playlistinfo from "../../components/playlist/Playlistinfo";
import { PlaylistLearning } from "../../components/playlist/PlaylistLearning";
import PlaylistCurriculum from "../../components/playlist/PlaylistCurriculum";
import RelatedPlaylists from "../../components/playlist/RelatedPlaylists";

export const PlaylistDetails = () => {
  const { playlistId } = useParams();

  const playlist = playlists.find((item) => item.id === playlistId);

  if (!playlist) {
    return (
      <section className="min-h-screen bg-zinc-950 flex items-center justify-center p-8">
        <h1 className="text-3xl font-bold text-white">Plalylist not found!</h1>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-zinc-950 text-white">
      <Container>
        <PlaylistDetailsHero playlist={playlist} />
        <Playlistinfo playlist={playlist} />
        <PlaylistLearning playlist={playlist} />
        <PlaylistCurriculum playlist={playlist} />
        <RelatedPlaylists currentPlaylist={playlist} />
      </Container>
    </section>
  );
};

export default PlaylistDetails;
