const PlaylistHero = () => {
  return (
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
  );
};

export default PlaylistHero;
