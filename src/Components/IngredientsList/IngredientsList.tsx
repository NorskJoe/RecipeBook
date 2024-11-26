import IngredientsService from "../../Services/Ingredients/Ingredients.service";
import { IngredientItem, QuantityType } from "./IngredientsList.models";
import styles from "./IngredientsList.module.scss";

interface IngredientsListProps {
  ingredients: IngredientItem[];
}

const IngredientsList = ({
  ingredients: ingredients,
}: IngredientsListProps) => {
  return (
    <div className="container text-start my-5">
      <h2 className="text-center">Ingredients</h2>
      <ul className="list-group list-group-flush my-4">
        {ingredients.map((item, index) => (
          <li
            className={`list-group-item fs-5 py-3 ${styles.listItem}`}
            key={index}
          >{`${item.quantity} ${IngredientsService.convertIngredientsToPlural(
            item.quantityType,
            item.quantity
          )} ${item.name}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientsList;
