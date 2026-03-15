import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted");

    return () => {
      setCount(0)
    }
  }, []);

  useEffect(() => {
    console.log("Count changed");
  }, [count]);

  useEffect(() => {
    console.log("Runs on every render");
  });

  return (
    <div>

    </div>
  )
}

export default App;