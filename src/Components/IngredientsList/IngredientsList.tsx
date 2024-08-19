import IngredientsService from "../../Services/Ingredients/Ingredients.service";
import { IngredientItem, QuantityType } from "./IngredientsList.models";
import styles from "./IngredientsList.module.scss";

interface IngredientsListProps {
  items: IngredientItem[];
}

const IngredientsList = ({ items }: IngredientsListProps) => {
  items = [
    {
      name: "honey",
      quantity: 2,
      quantityType: QuantityType.TSP,
    },
    {
      name: "dry yeast",
      quantity: 2,
      quantityType: QuantityType.TSP,
    },
    {
      name: "plain flour",
      quantity: 5,
      quantityType: QuantityType.CUP,
    },
    {
      name: "kosher salt",
      quantity: 1,
      quantityType: QuantityType.TBSP,
    },
    {
      name: "olive oil",
      quantity: 6,
      quantityType: QuantityType.TBSP,
    },
    {
      name: "unsalted butter",
      quantity: 4,
      quantityType: QuantityType.TBSP,
    },
    {
      name: "garlic cloves",
      quantity: 4,
      quantityType: QuantityType.PIECES,
    },
  ];

  return (
    <div className="container text-start my-5">
      <h2 className="text-center">Ingredients</h2>
      <ul className="list-group list-group-flush my-4">
        {items.map((item, index) => (
          <li className={`list-group-item ${styles.listItem}`} key={index}>{`${
            item.quantity
          } ${IngredientsService.convertIngredientsToPlural(
            item.quantityType,
            item.quantity
          )} ${item.name}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientsList;
