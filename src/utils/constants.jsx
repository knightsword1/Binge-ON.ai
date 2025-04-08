export const LOGO = "https://i.imgur.com/pfDU2cJ.png";

export const Star = "https://www.svgrepo.com/show/13695/star.svg";

export const NEXT_SWIPE =
  "https://icons.geosm.ge/point-right.svg?revision=6&color=grey";

export const PREVIOUS_SWIPE =
  "https://icons.geosm.ge/point-left.svg?revision=6&color=grey";

export const USER_AVATAR =
  "https://wallpapers.com/images/high/pikachu-face-illustration-x8q0l4i7d7osqs2h.png";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_TMDB_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w780";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web/IN-en-20250324-TRIFECTA-perspective_d7c906ec-0531-47de-8ece-470d5061c88a_large.jpg";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
  { identifier: "french", name: "French" },
  { identifier: "japanese", name: "Japanese" },
];

export const GEMINI_KEY = import.meta.env.VITE_GEMINI_KEY;
