import React from "react";
import RecipeHeader from "./RecipeHeader";
import IngredientsList from "./IngredientsList";
import Instructions from "./Instructions";

function RecipeCard({ recipeObject }) {
  return (
    <div className="recipe-card">
      <RecipeHeader title={recipeObject.title} image={recipeObject.image} />
      <IngredientsList ingredients={recipeObject.ingredients} />
      <Instructions instructions={recipeObject.instructions} />
    </div>
  );
}

export default RecipeCard;
