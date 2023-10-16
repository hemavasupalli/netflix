import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovies: null,
        PopularMovies:null,
        recommededMovies:null
    },
    reducers: {
        addNowPlayingMovielist: (state,action)=>{
            state.nowPlayingMovies = action.payload

        },
        addPopularMovielist: (state,action)=>{
            state.PopularMovies = action.payload

        },
        
        addRecommededMovieslist: (state,action)=>{
            state.recommededMovies = action.payload

        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
          },
    }
})
export const {addNowPlayingMovielist ,addTrailerVideo,addPopularMovielist ,addRecommededMovieslist} = moviesSlice.actions;
 export default moviesSlice.reducer;