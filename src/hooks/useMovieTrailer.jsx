// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { API_OPTIONS } from "../utils/constants";
// import { addTrailerVideo } from "../utils/moviesSlice";

// const useMovieTrailer = (movieId) => {
//   const dispatch = useDispatch();

//   const trailerVideo = useSelector((store) => store.movies.trailerVideo);

//   const getMovieVideos = async () => {
//     const data = await fetch(
//       "https://api.themoviedb.org/3/movie/" +
//         movieId +
//         "/videos?language=en-US",
//       API_OPTIONS
//     );
//     const json = await data.json();

//     const filterData = json.results.filter((video) => video.type === "Trailer");
//     const trailer = filterData.length ? filterData[0] : json.results[0];

//     dispatch(addTrailerVideo(trailer));
//   };

//   useEffect(() => {
//    ( !trailerVideo && getMovieVideos());
//   }, []);
// };

// export default useMovieTrailer;

import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    const getMovieVideos = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();

      if (json.results.length === 0) return;

      const filtered = json.results.filter((video) => video.type === "Trailer");
      setTrailer(filtered.length ? filtered[0] : json.results[0]);
    };

    getMovieVideos();
  }, [movieId]);

  return trailer;
};

export default useMovieTrailer;
