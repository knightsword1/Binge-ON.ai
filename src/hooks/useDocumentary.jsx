import { useDispatch, useSelector } from "react-redux";
import { addDocumentary } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useDocumentary = () => {
  // Fetch data from TMDB API and update store

  const dispatch = useDispatch();

  const documentary = useSelector((store) => store.movies.nowPlayingMovies);

  const getDocumentary = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&page=1&sort_by=popularity.desc&with_genres=99",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addDocumentary(json.results));
  };

  useEffect(() => {
    !documentary && getDocumentary();
  }, []);
};

export default useDocumentary;
