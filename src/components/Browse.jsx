import React from 'react'
import BrowseHeader from './BrowseHeader'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <BrowseHeader />
      <MainContainer />
      <SecondaryContainer />
    </div>

    /* Main Container
        - Video Background
        - Video Title
    
      Secondary Container
        - MovieList * n
        - Cards * n
    
    */
  )
};

export default Browse;