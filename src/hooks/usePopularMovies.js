import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { API_Options } from "../utils/constant";
import {  addPopularMovielist } from "../utils/moviesSlice";

const usePopularMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_Options
    );
    const json = await data.json();
    dispatch(addPopularMovielist(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;