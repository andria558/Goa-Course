import React from 'react'
import MovieHeader from './MovieHeader ';
import ReviewBody from './ReviewBody';
import Reviewer from './Reviewer';

const Card = ({ movieObject }) => {
  return (
    <div>
      <MovieHeader title={movieObject.title} posterImg={movieObject.posterImg} />
      <ReviewBody reviewText={movieObject.reviewText} />
      <Reviewer reviewer={movieObject.reviewer} />
    </div>
  )
}

export default Card;