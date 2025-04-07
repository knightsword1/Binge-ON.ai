import React from "react";

const VideoTitle = ({ title, overview, rating }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-7 md:px-14 absolute text-white bg-gradient-to-r from-gray-800">
      <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">
        {overview} <span>Rating : {rating}</span>
      </p>

      <div className="">
        <button className="bg-white text-black my-3 px-3 py-1 md:py-4 md:px-12 text-xl rounded hover:opacity-80">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block mx-2 bg-gray-500 text-white p-4 px-12 text-xl opacity-50 rounded">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
