import { useDispatch, useSelector } from "react-redux";
import { addMystery } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMystery = () => {
  // Fetch data from TMDB API and update store

  const dispatch = useDispatch();

  const mystery = useSelector((store) => store.movies.nowPlayingMovies);

  const getMystery = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&page=1&sort_by=popularity.desc&with_genres=9648",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addMystery(json.results));
  };

  useEffect(() => {
    !mystery && getMystery();
  }, []);
};

export default useMystery;
