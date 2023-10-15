import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovies: null,
    },
    reducers: {
        addNowPlayingMovielist: (state,action)=>{
            state.nowPlayingMovies = action.payload

        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
          },
    }
})
export const {addNowPlayingMovielist ,addTrailerVideo} = moviesSlice.actions;
 export default moviesSlice.reducer;