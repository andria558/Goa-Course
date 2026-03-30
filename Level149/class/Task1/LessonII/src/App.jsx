import React, { useEffectEvent, useState } from 'react'

const App = () => {
  let [count, setCount] = useState(0);

  let LogCount = useEffectEvent(() => {
    console.log(count);
  });


  return (
    <div>
      <button onClick={setCount(prev => prev + 1)}>+1</button>
      <button onClick={LogCount}>Consol.Log</button>
    </div>
  )
}

export default App;