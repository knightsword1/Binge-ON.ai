import React from "react";

const VideoTitle = ({ title, overview, rating }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-gray-800">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">
        {overview} <span>Rating : {rating}</span>
      </p>

      <div className="">
        <button className="bg-white text-black p-4 px-12 text-xl rounded hover:opacity-80">
          ▶️ Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-xl opacity-50 rounded">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
