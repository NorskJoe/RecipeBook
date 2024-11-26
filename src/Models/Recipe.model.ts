import { IngredientItem } from "../Components/IngredientsList/IngredientsList.models";
import { MethodItem } from "../Components/Method/Method.models";

export interface Recipe {
  recipeName: string;
  ingredients: IngredientItem[];
  method: MethodItem[];
}
