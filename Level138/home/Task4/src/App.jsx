import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("tick");
    }, 1000);
    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    const handleClick = () => console.log("clicked", count);
    document.addEventListener("click", setCount);
    return () => document.removeEventListener("click", handleClick);
  }, [count]);


  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("done");
    }, 2000);

    return () => clearTimeout(timeout);
  });

  return (
    <div>

    </div>
  )
}

export default App;

