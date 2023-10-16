import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const movies = useSelector(store=> store.movies);

  return (
    movies.nowPlayingMovies && (
    <div className='bg-black'>
      <div className='relative px-3 z-20 -mt-[13rem]  pl-20'>
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
      <MovieList title={"Most Popular"} movies={movies?.nowPlayingMovies}/>
      <MovieList title={"Romantic Movies"} movies={movies?.nowPlayingMovies}/>
      <MovieList title={"Thriller Movies"} movies={movies?.nowPlayingMovies}/>
      </div>

    </div>)
  )
}

export default SecondaryContainer