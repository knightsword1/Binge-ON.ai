// import React from "react";

// import { useSelector } from "react-redux";
// import useMovieTrailer from "../hooks/useMovieTrailer";

// const VideoBackground = ({ movieId }) => {
//   const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
//   // fetch trailer video
//   useMovieTrailer(movieId);

//   return (
//     <div className="relative w-full aspect-video">
//       <iframe
//         className="w-full h-full"
//         src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&cc_load_policy=0`}
//         title="YouTube video player"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//         allowFullScreen
//       ></iframe>
//     </div>
//   );
// };

// export default VideoBackground;

import React from "react";

import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movie }) => {
  // fetch trailer video
  const movieId = movie?.id;
  const trailer = useMovieTrailer(movieId);
  if (!trailer) return null;

  return (
    <div className="relative w-full aspect-video">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&cc_load_policy=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
