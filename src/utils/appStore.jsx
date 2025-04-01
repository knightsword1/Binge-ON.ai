import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const appStore = configureStore({

    // A single reducer function that will be used as the root reducer, or an object of slice 
    // reducers that will be passed to combineReducers().
    reducer: {
        user: userReducer,
    },
});

export default appStore;