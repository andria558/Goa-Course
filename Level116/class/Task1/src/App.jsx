import React from 'react'
import Handleclick from './components/handleclick';

const App = () => {

  const handleClick = () => {
    alert('GOA BEST');
  }

  return (
    <Handleclick onHandle={handleClick} />
  );
}

export default App;