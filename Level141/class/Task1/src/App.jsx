import React, { useEffect, useEffectEvent } from 'react'
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const onTick = useEffectEvent(() => {
    setCount(c => c + 1);
  });

  useEffect(() => {
    const id = setInterval(() => {
      onTick();
    }, 1000);

    return () => {
      clearInterval(id);
    }

  }, [onTick])

  return (
    <div>
      Seconds Passed: 
       .{count}
    </div>
  )
}

export default App;