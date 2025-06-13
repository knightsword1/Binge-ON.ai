import { useDispatch, useSelector } from "react-redux";
import { addScienceFiction } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useScienceFiction = () => {
  // Fetch data from TMDB API and update store

  const dispatch = useDispatch();

  const ScienceFiction = useSelector((store) => store.movies.nowPlayingMovies);

  const getScienceFiction = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?page=1&sort_by=popularity.desc&with_genres=878",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addScienceFiction(json.results));
  };

  useEffect(() => {
    !ScienceFiction && getScienceFiction();
  }, []);
};

export default useScienceFiction;
