import IngredientsList from '../IngredientsList';
import { IngredientItem } from '../IngredientsList/IngredientsList.models';
import Method from '../Method/Method';
import { MethodItem } from '../Method/Method.models';
import SummaryPanel from '../SummaryPanel/SummaryPanel';
import styles from './RecipePage.module.scss';

interface RecipePageProps {
  title: string;
  ingredients: IngredientItem[];
  method: MethodItem[];
  image: string;
  prepTime: string;
  cookTime: string;
  serves: number;
}

const RecipePage = ({
  title,
  ingredients,
  method,
  image,
  prepTime,
  cookTime,
  serves,
}: RecipePageProps) => {
  return (
    <>
      <div className="container text-center">
        <h1>{title}</h1>
        <img className={styles.recipeImage} src={image}></img>
        <SummaryPanel prepTime={prepTime} cookTime={cookTime} serves={serves} />
        <div className="container text-center">
          <div className="row align-items-start">
            <div className="col">
              <IngredientsList ingredients={ingredients} />
            </div>
            <div className="col">
              <Method steps={method} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipePage;
