import { useEffect, useState } from "react";
import RecipePage from "./Components/RecipePage";
import { getRecipe } from "./Services/Recipes/Recipe.service";
import { Recipe } from "./Models/Recipe.model";

const App = () => {
  const [recipeData, setRecipeData] = useState({} as Recipe);

  useEffect(() => {
    let loaded = true;
    getRecipe().then((recipe) => {
      console.log("recipe response: ", recipe);
      if (loaded) {
        setRecipeData(recipe);
      }
    });
    return () => {
      loaded = false;
    };
  }, []);
  console.log("recipe data: ", recipeData);

  return (
    recipeData && (
      <RecipePage
        title={recipeData.recipeName}
        ingredients={recipeData.ingredients}
        method={recipeData.method}
      ></RecipePage>
    )
  );
};

export default App;
