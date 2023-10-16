import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { API_Options } from "../utils/constant";
import {   addRecommededMovieslist } from "../utils/moviesSlice";

const useRecommededMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const getRecommededMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_Options
    );
    const json = await data.json();
    dispatch(addRecommededMovieslist(json.results));
  };

  useEffect(() => {
    getRecommededMovies();
  }, []);
};

export default useRecommededMovies;