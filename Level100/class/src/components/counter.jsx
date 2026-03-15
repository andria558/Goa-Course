import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [increase, setIncrease] = useState(1);

  const handleIncrease = () => {
    setCounter(counter + increase);
    console.log("Increase", counter);
  }

  const handleDecrease = () => {
    setCounter(counter - increase);
    console.log("Decrease", counter);
  }

  const handleStepIncrease = () => {
    setIncrease((increase * 2 ));
  }

  return (
    <div>
      <span>{counter}</span>
      <div>
        <button onClick={handleIncrease}>INCREASE</button>
        <button onClick={handleDecrease}>DECREASE</button>
        <button onClick={handleStepIncrease}>+{increase}</button>
      </div>
    </div>
  );
}



