export interface IngredientItem {
    quantity: number;
    quantityType: QuantityType;
    name: string;
}

export enum QuantityType {
    TBSP = 'Tbsp',
    TSP = 'tsp',
    CUP = 'cup',
    GRAMS = 'g',
    KILOS = 'kg',
    MLS = 'ml',
    LITRES = 'L'
}

