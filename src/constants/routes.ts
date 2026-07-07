export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  CONTACT: "/contact",
  CATEGORY: "/category/:categoryName",
  PLAYLIST: "/playlist/:playlistId",
  WATCH: "/watch/:videoId",
  NOT_FOUND: "*",
} as const;
