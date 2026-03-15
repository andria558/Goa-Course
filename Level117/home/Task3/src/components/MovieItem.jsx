import React from 'react'

const MovieItem = ({ Nmovie }) => {
  return (
    <div>
      {
        Nmovie.map((e, i) => {
          return <button
            onClick={() => alert(`You added ${e} to your watchlist!`)}
            key={i}
          >
            {e}
          </button>
        })
      }
    </div>
  )
}

export default MovieItem;