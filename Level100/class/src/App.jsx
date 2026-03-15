// import { useState } from 'react';
// import image from './assets/images/image.png';
// import './App.css'

// export default function App() {
//   const [count, setCounter] = useState(0);

//   const handleIncrease = () => {
//     setCounter(count + 1);
//     console.log(`Increase`, count);
//   }

//   const handleDecrease = () => {
//     setCounter(count - 1);
//     console.log(`Decrease`, count);
//   }


//   return (
//     <div>

//       <img src={image} alt="img" /><br />
//       <span>{count}</span><br />
//       <button onClick={handleIncrease}>+</button>
//       <button onClick={handleDecrease}>-</button>
//     </div>
//   );
// }

import Count from './components/counter'

export default function App() { 
  return (
    <Count/>
  );

}