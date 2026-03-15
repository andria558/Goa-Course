import React from 'react'
import SongItem from './components/SongItem';

const App = () => {
  return (
    <div>
      <SongItem Nsong={["Blinding Lights", "Levitating", "Peaches", "Stay"]} />
    </div>
  )
}

export default App;