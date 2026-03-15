import React, { useState, useEffect } from 'react';
import { useEffectEvent } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const Tick = useEffectEvent(() => {
    console.log(count);
  });

  useEffect(() => {
    const id = setInterval(() => {
      Tick();
      setCount(c => c + 3);
    }, 3000);

    return () => clearInterval(id);
  }, []);

  return (
    <div>
      Seconds Passed:
       .in consol 🫳
    </div>
  );
};

export default App;
