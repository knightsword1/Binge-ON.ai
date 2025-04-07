import React from "react";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";
import { BG_URL } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div>
      <div className="fixed -z-10 ">
        <img
          className="h-screen w-screen object-cover"
          src={BG_URL}
          alt="background-image"
        />
      </div>
      <div className="">
        <GPTSearchBar />
        <GPTMovieSuggestions />
      </div>
    </div>
  );
};

export default GPTSearch;
