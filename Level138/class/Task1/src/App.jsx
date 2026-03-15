import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {
  let [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTime(prev => prev + 1), 1000)

    return () => {
      clearInterval(interval)
    }
  }, [time])


  return (
    <div>
      Time: {time}
    </div>
  )
}

export default App;