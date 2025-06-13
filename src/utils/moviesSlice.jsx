import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    animation: null,
    documentary: null,
    history: null,
    mystery: null,
    scienceFiction: null,
    thriller: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addAnimation: (state, action) => {
      state.animation = action.payload;
    },
    addDocumentary: (state, action) => {
      state.documentary = action.payload;
    },
    addHistory: (state, action) => {
      state.history = action.payload;
    },
    addMystery: (state, action) => {
      state.mystery = action.payload;
    },
    addScienceFiction: (state, action) => {
      state.scienceFiction = action.payload;
    },
    addThriller: (state, action) => {
      state.thriller = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addAnimation,
  addDocumentary,
  addHistory,
  addMystery,
  addScienceFiction,
  addThriller,
} = moviesSlice.actions;
export default moviesSlice.reducer;
