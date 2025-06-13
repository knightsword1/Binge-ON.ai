import { useDispatch, useSelector } from "react-redux";
import { addAnimation } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useAnimation = () => {
  // Fetch data from TMDB API and update store

  const dispatch = useDispatch();

  const animation = useSelector((store) => store.movies.nowPlayingMovies);

  const getAnimation = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?page=1&sort_by=popularity.desc&with_genres=16",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addAnimation(json.results));
  };

  useEffect(() => {
    !animation && getAnimation();
  }, []);
};

export default useAnimation;
