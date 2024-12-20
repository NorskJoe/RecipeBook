import { useEffect, useState } from 'react';
import RecipePage from './Components/RecipePage';
import { recipeService } from './Services/Recipes/Recipe.service';
import { Recipe } from './Models/Recipe.model';

const App = () => {
  const [recipeData, setRecipeData] = useState<Recipe | undefined>(undefined);

  useEffect(() => {
    recipeService.getRecipe().subscribe((recipe) => {
      setRecipeData(recipe);
    });
  }, []);

  return recipeData && <RecipePage recipe={recipeData}></RecipePage>;
};

export default App;
