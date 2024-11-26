import { QuantityType } from '../../Components/IngredientsList/IngredientsList.models';

const IngredientsService = {
  convertIngredientsToPlural: (
    quantityType: QuantityType,
    amount: number
  ): string => {
    if (amount <= 1) {
      return quantityType;
    }
    switch (quantityType) {
      case QuantityType.CUP:
        return 'cups';
      case QuantityType.KILOS:
        return 'kgs';
      case QuantityType.LITRES:
        return 'Ls';
      case QuantityType.PIECES:
        return 'pieces';
      default:
        return quantityType;
    }
  },
};

export default IngredientsService;
