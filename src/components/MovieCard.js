import React from 'react'
import { IMG_CDN } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-52 '>
        <img className='p-3' alt="movie Card" src = {IMG_CDN + posterPath}/>
    </div>
  )
}

export default MovieCard