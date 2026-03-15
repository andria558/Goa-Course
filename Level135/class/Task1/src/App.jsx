import React, { useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);

  let input = document.querySelector('input');


  const addItem = () => {
    setItems([...items, `Item ${input.value}`]);
  };

  const removeItem = () => {
    setItems(items.slice(0, -1));
  };

  return (
    <div>
      <h2>My Items</h2>
      <input type="text" required/>
      <button onClick={addItem}>Add Item</button>
      <button onClick={removeItem}>Remove last Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
