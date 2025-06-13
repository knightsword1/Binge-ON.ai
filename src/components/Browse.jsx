import React from "react";
import BrowseHeader from "./BrowseHeader";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useAnimation from "../hooks/useAnimation";
import useDocumentary from "../hooks/useDocumentary";
import useHistory from "../hooks/useHistory";
import useMystery from "../hooks/useMystery";
import useScienceFiction from "../hooks/useScienceFiction";
import useThriller from "../hooks/useThriller";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  // usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useAnimation();
  useDocumentary();
  useHistory();
  useMystery();
  useScienceFiction();
  useThriller();

  return (
    <div>
      <BrowseHeader />
      {showGptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>

    /* Main Container
        - Video Background
        - Video Title
    
      Secondary Container
        - MovieList * n
        - Cards * n
    
    */
  );
};

export default Browse;
