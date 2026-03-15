import React from "react";
import recipeData from "./recipeData";
import RecipeCard from "./components/RecipeCard";

function App() {
  return (
    <div>
      {recipeData.map((recipe, index) => (
        <RecipeCard key={index} recipeObject={recipe} />
      ))}
    </div>
  );
}
 
export default App;