import { Recipe } from "../../Models/Recipe.model";

const RECIPE_URL = "./recipes.json";

const getRecipe = async (): Promise<Recipe> => {
  console.log("fetching recipe");
  try {
    await fetch(RECIPE_URL)
      .then((response) => response.json())
      .then((result) => {
        console.log("recipe result in service: ", result);
        return result as Recipe;
      });
  } catch (error) {
    return <Recipe>{};
  }
  return <Recipe>{};
};

export { getRecipe };
