import { useDispatch, useSelector } from "react-redux";
import { addThriller } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useThriller = () => {
  // Fetch data from TMDB API and update store

  const dispatch = useDispatch();

  const Thriller = useSelector((store) => store.movies.nowPlayingMovies);

  const getThriller = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&page=1&sort_by=popularity.desc&with_genres=53",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addThriller(json.results));
  };

  useEffect(() => {
    !Thriller && getThriller();
  }, []);
};

export default useThriller;
