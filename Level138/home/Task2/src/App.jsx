import React from 'react'
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Running...");
    }, 1000);

    // cleanup
    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    const handleClick = () => console.log("Clicked!");
    document.addEventListener("click", handleClick);

    // cleanup
    return () => document.removeEventListener("click", handleClick);
  }, []);


  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("done");
    }, 5000);

    return () => clearTimeout(timeout); // cleanup
  }, []);

  return (
    <div>
      {}
    </div>
  )
}

export default App
