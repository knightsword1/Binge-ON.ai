import React, { useRef } from "react";
import { API_OPTIONS, BG_URL } from "../utils/constants";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import ai from "../utils/gemini";
import { addGptMovieResult } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);

  const searchText = useRef(null);

  // Search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    return json.results;
  };

  // * Handling Gemini search results
  const handleGeminiSearchClick = async () => {
    try {
      console.log(searchText.current.value);
      // Make an API call to Gemini API and get Movie Results
      const geminiQuery = `Act as a Movie Recommendation system and suggest some movies for the query: "${searchText.current.value}". Provide atmost 5 MOVIE names (no year , nothing else) based on the given query in **valid JSON format**.  
    Output should be a **pure JSON array** without any additional text. 
    Example:
    ["The Dark Knight", "Inception", "Interstellar", "Tenet", "Dunkirk"]`;
      const geminiResults = await ai.models.generateContent({
        model: "gemini-2.0-flash-001",
        contents: geminiQuery,
      });
      // Extract the text response properly
      const responseText =
        geminiResults.candidates?.[0]?.content?.parts[0].text;

      const stringOfMovies = responseText.replace(/```json|\n```/g, "").trim();
      const cleanedMovies = JSON.parse(stringOfMovies);
      console.log(cleanedMovies); // * cleanedMovies contains an array of movies names
      // console.log(Array.isArray(cleanedMovies));

      // For each movie , I will search TMDB API

      // Displaying Movie Details
      const promiseArray = cleanedMovies.map((movie) => searchMovieTMDB(movie));
      // [Promise, Promise, Promise, Promise, Promise]

      const tmdbResults = await Promise.all(promiseArray);

      console.log(tmdbResults);

      dispatch(
        addGptMovieResult({
          movieNames: cleanedMovies,
          movieResults: tmdbResults,
        })
      );
    } catch (error) {
      console.error("Error while fetching movie recommendations:", error);
    }
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="absolute w-1/2 bg-black grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-8 bg-white"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-4 cursor-pointer"
          onClick={handleGeminiSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
