// import React from "react";
// import { useSelector } from "react-redux";
// import VideoBackground from "./VideoBackground";
// import VideoTitle from "./VideoTitle";

// const MainContainer = () => {
//   const movies = useSelector((store) => store.movies?.nowPlayingMovies);

//   if (!movies) return;

//   const mainMovie = movies[0];

//   const { original_title, overview, vote_average, id, genre_ids } = mainMovie;
//   //   console.log(genre_ids);

//   return (
//     <div className="pt-[30%] bg-black md:pt-0">
//       <VideoTitle
//         title={original_title}
//         overview={overview}
//         rating={vote_average}
//         genre={genre_ids}
//       />
//       <VideoBackground movieId={id} />
//     </div>
//   );
// };

// export default MainContainer;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { NEXT_SWIPE, PREVIOUS_SWIPE } from "../utils/constants";

const MainContainer = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    setShowTitle(false); // Reset before setting
    const timer = setTimeout(() => {
      setShowTitle(true);
    }, 1500); // 2 seconds

    return () => clearTimeout(timer); // Cleanup
  }, [activeIndex]); // Run when the active movie changes

  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const topMovies = movies.slice(0, 5);
  const activeMovie = topMovies[activeIndex];

  const handlePreviousClick = () => {
    setActiveIndex((prev) => (prev === 0 ? topMovies.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prev) => (prev + 1) % topMovies.length);
  };

  const { original_title, overview, vote_average, genre_ids } = activeMovie;
  //   console.log(genre_ids);

  return (
    <div className="pt-[30%] bg-black md:pt-0">
      {showTitle && (
        <VideoTitle
          title={original_title}
          overview={overview}
          rating={vote_average}
          genre={genre_ids}
        />
      )}
      <VideoBackground movie={activeMovie} />

      {/* Navigation */}
      <div className="absolute top-1/2 w-full flex justify-between px-4 z-20">
        <button
          onClick={handlePreviousClick}
          className="bg-white/10 p-2 rounded-full cursor-pointer hover:bg-white/20 transition"
        >
          <img src={PREVIOUS_SWIPE} alt="Previous" className="w-8 h-8" />
        </button>
        <button
          onClick={handleNextClick}
          className="bg-white/10 p-2 rounded-full cursor-pointer hover:bg-white/20 transition"
        >
          <img src={NEXT_SWIPE} alt="Next" className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

export default MainContainer;
