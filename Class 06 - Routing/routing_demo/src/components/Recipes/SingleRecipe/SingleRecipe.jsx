import React from "react";
import { useParams, useLocation } from "react-router-dom";

export const SingleRecipe = (props) => {
  const params = useParams();
  const location = useLocation();
  console.log(location);
  const recipeId = params.id;
  console.log(recipeId);

  const recipeFound = props.recipes.find((recipe) => recipe.id === recipeId);

  if (!recipeFound) {
    return <h1>No recipe found</h1>;
  }
  return <h1>Recipe found: {recipeFound.recipeName}</h1>;
};
