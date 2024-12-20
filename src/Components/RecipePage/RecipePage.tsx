import { useState } from 'react';
import { Recipe } from '../../Models/Recipe.model';
import IngredientsList from '../IngredientsList';
import Method from '../Method/Method';
import SummaryPanel from '../SummaryPanel/SummaryPanel';
import styles from './RecipePage.module.scss';
import { IngredientItem } from '../IngredientsList/IngredientsList.models';

interface RecipePageProps {
  recipe: Recipe;
}

const RecipePage = ({ recipe }: RecipePageProps) => {
  const [currentIngredients, setCurrentIngredients] = useState(
    recipe.ingredients
  );
  const [serveSize, setServeSize] = useState(recipe.serves);

  const serveSizeChange = (increase: boolean) => {
    const oldServe = serveSize;
    if (increase) {
      setServeSize(serveSize + 1);
      setCurrentIngredients(
        currentIngredients.map((x) => {
          return {
            ...x,
            quantity:
              Math.round((x.quantity + x.quantity / oldServe) * 1e2) / 1e2,
          } as IngredientItem;
        })
      );
    } else {
      setServeSize(serveSize - 1);
      setCurrentIngredients(
        currentIngredients.map((x) => {
          return {
            ...x,
            quantity:
              Math.round((x.quantity - x.quantity / oldServe) * 1e2) / 1e2,
          } as IngredientItem;
        })
      );
    }
  };
  return (
    <>
      <div className="container text-center">
        <h1>{recipe.name}</h1>
        <img className={styles.recipeImage} src={recipe.image}></img>
        <SummaryPanel
          prepTime={recipe.prepTime}
          cookTime={recipe.cookTime}
          serves={serveSize}
          handleServeSizeChange={serveSizeChange}
        />
        <div className="container text-center">
          <div className="row align-items-start">
            <div className="col">
              <IngredientsList ingredients={currentIngredients} />
            </div>
            <div className="col">
              <Method steps={recipe.method} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipePage;
