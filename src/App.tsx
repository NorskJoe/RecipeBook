import { useEffect, useState } from 'react';
import RecipePage from './Components/RecipePage';
import { getRecipe } from './Services/Recipes/Recipe.service';
import { Recipe } from './Models/Recipe.model';

const App = () => {
  const [recipeData, setRecipeData] = useState<Recipe | undefined>(undefined);

  useEffect(() => {
    getRecipe().then((recipe) => {
      setRecipeData(recipe);
    });
  }, []);

  return (
    recipeData && (
      <RecipePage
        title={recipeData.name}
        ingredients={recipeData.ingredients}
        method={recipeData.method}
        image={recipeData.image}
      ></RecipePage>
    )
  );
};

export default App;
