import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className=" text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar relative z-0">
        <div className="flex overflow-visible relative">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.original_title}
              overview={movie.overview}
              posterPath={movie.poster_path}
              release_date={movie.release_date}
              vote_average={movie.vote_average}
              genre_ids={movie.genre_ids}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
