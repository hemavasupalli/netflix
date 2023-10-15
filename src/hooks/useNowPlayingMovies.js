import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { API_Options } from "../utils/constant";
import { addNowPlayingMovielist } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_Options
    );
    const json = await data.json();
    dispatch(addNowPlayingMovielist(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;