import React from 'react'
import { useState } from 'react';

const App = () => {
  const [text, setText] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <input
        type="text"
        value={text} // Step 3: Link input value to state
        onChange={(e) => setText(e.target.value)} // Step 4: Update state
        placeholder="Type something..."
        style={{ padding: "10px", fontSize: "16px" }}
      />

      {/* Step 5: Mirror text in real-time */}
      <h1>{text}</h1>
    </div>
  )
}

export default App;