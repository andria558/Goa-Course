import React from 'react'
import Greeting from './components/Greeting';

const App = () => {
  return (
    <div>
      <Greeting name={['Dato', 'Nino', 'Luka']} />
    </div>
  )
}

export default App;