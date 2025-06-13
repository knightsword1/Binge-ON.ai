import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="mt-0 md:-mt-36 pl-0 md:pl-7 relative z-20 font-medium font-serif">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          {/* <MovieList title={"Popular"} movies={movies.popularMovies} /> */}
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
          <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
          <MovieList title={"Anime"} movies={movies.animation} />
          <MovieList title={"Documentary"} movies={movies.documentary} />
          <MovieList title={"History"} movies={movies.history} />
          <MovieList title={"Mystery"} movies={movies.mystery} />
          <MovieList title={"Science Fiction"} movies={movies.scienceFiction} />
          <MovieList title={"Thriller"} movies={movies.thriller} />

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
