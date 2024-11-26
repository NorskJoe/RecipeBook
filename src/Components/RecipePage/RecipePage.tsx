import IngredientsList from '../IngredientsList';
import { IngredientItem } from '../IngredientsList/IngredientsList.models';
import Method from '../Method/Method';
import { MethodItem } from '../Method/Method.models';
import styles from './RecipePage.module.scss';

interface RecipePageProps {
  title: string;
  ingredients: IngredientItem[];
  method: MethodItem[];
}

const RecipePage = ({ title, ingredients, method }: RecipePageProps) => {
  return (
    <>
      <div className="container text-center">
        <h1>{title}</h1>
        <img className={styles.recipeImage} src="/no-knead-focaccia.webp"></img>
        <div className="container text-center">
          <div className="row align-items-start">
            <div className="col">
              <IngredientsList ingredients={ingredients}></IngredientsList>
            </div>
            <div className="col">
              <Method steps={method}></Method>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipePage;
