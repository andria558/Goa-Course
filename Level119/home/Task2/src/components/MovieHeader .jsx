import React from 'react'

const MovieHeader  = ({ title, posterImg }) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={posterImg} alt="~ ~ ~" />
    </div>
  )
}

export default MovieHeader ;