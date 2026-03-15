import React, { useState } from 'react';

const App = () => {
  const ingredients = ["Cheese", "Tomato", "Mushrooms", "Olives", "Pepperoni"];
  const [selected, setSelected] = useState([]);

  const toggleIngredient = (ingredient) => {
    if (selected.includes(ingredient)) {
      setSelected(selected.filter(item => item !== ingredient));
    } else {
      setSelected([...selected, ingredient]);
    }
  };

  return (
    <div>
      <h2>Build Your Pizza 🍕</h2>
      {
        ingredients.map((ingredient) => (
          <button
            key={ingredient}
            onClick={() => toggleIngredient(ingredient)}
            style={{
              margin: "5px",
              backgroundColor: selected.includes(ingredient) ? "red" : "green",
              color: "white"
            }}
          >
            {selected.includes(ingredient) ? `Remove ${ingredient}` : `Add ${ingredient}`}
          </button>
        ))
      }

      <h3>Selected Ingredients:</h3>
      <p>{selected.length > 0 ? selected.join(", ") : "No ingredients yet"}</p>
    </div>
  );
};

export default App;
