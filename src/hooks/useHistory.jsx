import { useDispatch, useSelector } from "react-redux";
import { addHistory } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useHistory = () => {
  // Fetch data from TMDB API and update store

  const dispatch = useDispatch();

  const history = useSelector((store) => store.movies.nowPlayingMovies);

  const getHistory = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&page=1&sort_by=popularity.desc&with_genres=36",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addHistory(json.results));
  };

  useEffect(() => {
    !history && getHistory();
  }, []);
};

export default useHistory;
