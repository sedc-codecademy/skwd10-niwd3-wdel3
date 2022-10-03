import React from "react";
import { useNavigate } from "react-router-dom";

export const Recipes = (props) => {
  console.log(props);
  const { recipes } = props;
  const navigate = useNavigate();

  // Do something with the props
  return (
    <>
      <h1>Welcome from recipes component</h1>

      <ul>
        <div>
          {recipes.map((recipe) => {
            return (
              <li
                key={recipe.id}
                onClick={() =>
                  // dont show state firstly
                  navigate(`/recipe/${recipe.id}`, { state: recipe })
                }
              >
                {recipe.recipeName}
              </li>
            );
          })}
        </div>
      </ul>
    </>
  );
};
