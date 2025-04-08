import React from "react";
import genreList from "../utils/genreList";
import { Star } from "../utils/constants";

const VideoTitle = ({ title, overview, rating, genre }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-7 md:px-14 absolute text-white bg-gradient-to-r from-black via-transparent to-transparent z-10">
      <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">
        <span className="flex font-serif">
          Popularity : {rating}
          <img src={Star} alt="Rating" className="w-4 h-4 mx-2 my-1" />
        </span>
      </p>
      <p className="max-md:hidden w-md text-gray-300 hover:text-white hover:font-md">
        {overview}
      </p>

      <div className="flex gap-2 flex-wrap text-sm text-gray-200 my-6">
        {genre?.map((id) => (
          <span
            key={id}
            className="bg-slate-700 px-2 py-1 rounded-full font-bold opacity-70 hover:opacity-100"
          >
            {genreList[id]}
          </span>
        ))}
      </div>

      <div className="w-md flex justify-between">
        {/* Watch Now button with gradient */}
        <button className="w-8/12 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg mr-2 my-3 px-3 py-1 md:py-4 md:px-12 text-xl hover:opacity-90 transition hover:scale-105">
          ▶️ Watch Now
        </button>

        {/* + button with tooltip */}
        <div className="w-3/12 relative group hidden md:inline-block ml-2 my-3">
          <button className="bg-gray-500 text-white p-4 px-10 text-xl opacity-70 rounded-lg hover:opacity-90">
            ✚
          </button>

          {/* Tooltip on hover */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-black text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Watchlist
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
