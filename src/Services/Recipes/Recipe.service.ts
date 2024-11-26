import { Recipe } from '../../Models/Recipe.model';

const RECIPE_URL = './recipes.json';

const getRecipe = async (): Promise<Recipe> => {
  try {
    const data = await fetch(RECIPE_URL);
    const response = await data.json();
    return response as Recipe;
  } catch (error) {
    console.error('Error fetching recipe: ', error);
    return <Recipe>{};
  }
};

export { getRecipe };
