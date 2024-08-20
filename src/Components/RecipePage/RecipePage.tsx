import IngredientsList from "../IngredientsList";
import Method from "../Method/Method";
import styles from "./RecipePage.module.scss";

interface RecipePageProps {
  title: string;
}

const RecipePage = ({ title }: RecipePageProps) => {
  return (
    <>
      <div className="container text-center">
        <h1>{title}</h1>
        <img className={styles.recipeImage} src="/no-knead-focaccia.webp"></img>
        <div className="container text-center">
          <div className="row align-items-start">
            <div className="col">
              <IngredientsList ingredients={[]}></IngredientsList>
            </div>
            <div className="col">
              <Method></Method>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipePage;
