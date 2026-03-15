import React from 'react'
import MovieItem from './components/MovieItem';

const App = () => {
  return (
    <div>
      <MovieItem Nmovie={["Inception", "Interstellar", "The Matrix", "Hereditary"]} />
    </div>
  )
}

export default App;