import { IngredientItem } from '../Components/IngredientsList/IngredientsList.models';
import { MethodItem } from '../Components/Method/Method.models';

export interface Recipe {
  name: string;
  ingredients: IngredientItem[];
  method: MethodItem[];
}
