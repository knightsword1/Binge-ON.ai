import React, { useState } from "react";
import { IMG_CDN_URL } from "../utils/constants";
import genreList from "../utils/genreList";

const MovieCard = ({
  title,
  overview,
  posterPath,
  release_date,
  vote_average,
  genre_ids = [],
}) => {
  const [isHovered, setIsHovered] = useState(false);

  if (!posterPath) return null;

  const releaseYear = release_date?.split("-")[0];
  const genres = genre_ids.map((id) => genreList[id]).join(", ");

  return (
    <div
      className="relative w-36 md:w-48 pr-4 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Poster */}
      <img
        alt="Movie Poster"
        src={IMG_CDN_URL + posterPath}
        className="rounded-lg transition-transform duration-300 hover:scale-110"
      />

      {/* Hover Pop-out */}
      {isHovered && (
        <div
          className="absolute top-[10rem] md:top-[0rem] left-0 w-[20rem] md:w-[24rem] h-[264px] z-[9999] bg-cover bg-center rounded-lg shadow-2xl overflow-hidden"
          style={{ backgroundImage: `url(${IMG_CDN_URL + posterPath})` }}
        >
          {/* Overlay and content */}
          <div className="bg-gradient-to-r from-stone-600 to-transparent p-10 text-white flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="text-gray-300 text-sm font-semibold mt-1">
                {releaseYear} • ⭐ {vote_average?.toFixed(1)}
              </p>
              <p className="text-yellow-300 text-sm font-semibold italic">
                {genres}
              </p>
              {/* Action Buttons */}
              <div className="flex gap-2 mt-4">
                <button className="bg-white text-black font-bold px-3 py-1 rounded hover:bg-gray-300 transition duration-200">
                  ▶ Play
                </button>
                <button className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-600 transition duration-200">
                  + Add to List
                </button>
              </div>
              <p className="text-sm mt-2 line-clamp-3">{overview}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
