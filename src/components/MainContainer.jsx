import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[0];

  const { original_title, overview, vote_average, id, genre_ids } = mainMovie;
  //   console.log(genre_ids);

  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle
        title={original_title}
        overview={overview}
        rating={vote_average}
        genre={genre_ids}
      />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
