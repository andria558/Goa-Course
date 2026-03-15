import React from 'react'
import playlistData from './playlistData'
import SongCard from './components/SongCard'

const App = () => {
  return (
    <div>
      {
        playlistData.map((item, index) => (
          <SongCard key={index} songObject={item} />
        ))
      }
    </div>
  )
}

export default App;