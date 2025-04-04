import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-40 pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList
            title={"Critically Acclaimed"}
            movies={movies.nowPlayingMovies}
          />
          <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Comedy"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Romance"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Thriller"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Anime"} movies={movies.nowPlayingMovies} />

          {/* 

        MovieList - Popular
        MovieList - NowPlaying
        MovieList - Trending
        MovieList - Genre

        Each will have multiple movie cards


       */}
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
