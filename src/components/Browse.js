import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useRecommededMovies from '../hooks/useRecommendedMovies';


const Browse = () => {
   useNowPlayingMovies();
   usePopularMovies();
   useRecommededMovies();
  return (
  <div className='w-full'>
    
     <Header/>
     <MainContainer/>
     <SecondaryContainer/>
    
  </div>
  )
}

export default Browse