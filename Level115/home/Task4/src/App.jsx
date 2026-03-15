import React from 'react'
import Status from './components/Status';

const App = () => {
  const IsOnline = Math.floor(Math.random() * 2) < .5;

  return (
    <div>
      <Status isOnline={IsOnline} />
    </div>
  )
}

export default App;