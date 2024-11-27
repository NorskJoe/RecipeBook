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

  return (
    recipeData && (
      <RecipePage
        title={recipeData.name}
        ingredients={recipeData.ingredients}
        method={recipeData.method}
        image={recipeData.image}
        prepTime={recipeData.prepTime}
        cookTime={recipeData.cookTime}
        serves={recipeData.serves}
      ></RecipePage>
    )
  );
};

export default App;
