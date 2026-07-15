const EmptyPlaylist = () => {
  return (
    <div className="mt-16 rounded-2xl border border-zinc-800 bg-zinc-900 p-12 text-center">
      <h3 className="text-2xl font-bold text-white">No Playlists Found</h3>
      <p className="mt-3 text-zinc-400">
        Try another search keyword or select another category.
      </p>
    </div>
  );
};

export default EmptyPlaylist;
