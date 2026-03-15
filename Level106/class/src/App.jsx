import { useState } from 'react';
import './App.css'



function App() {
  const [show, setShow] = useState(false);

  return (

      <div>
        <button onClick={() => setShow(true)}> Show </button>
        <button onClick={() => setShow(false)}> Hide </button>
        {show && <p>Hello World</p>}
      </div>


  );
}

export default App;
