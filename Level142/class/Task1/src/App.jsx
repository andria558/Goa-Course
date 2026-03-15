import React from 'react'
import CounterDisplay from './components/CounterDisplay';

const App = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => setCount(count + 1);

  return <CounterDisplay count={count} onIncrement={increment} />;
}

export default App;