export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  CONTACT: "/contact",
  CATEGORY: "/category/:categoryName",
  PLAYLIST: "/playlist", // All playlists page
  PLAYLIST_DETAILS: "/playlist/:playlistId", // Single playlist page
  WATCH: "/watch/:videoId",
  NOT_FOUND: "*",
} as const;
