import React from 'react'
import Card from './components/Card';
import movieData from './movieData'

const App = () => {
  return (
    <div>
      {movieData.map((item, index) => (
        <Card key={index} movieObject={item} />
      ))}
    </div>
  )
}

export default App;