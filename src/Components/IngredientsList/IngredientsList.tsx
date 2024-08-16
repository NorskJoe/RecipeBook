import { IngredientItem, QuantityType } from './IngredientsList.models';

interface IngredientsListProps {
    items: IngredientItem[];
}

const IngredientsList = ({ items }: IngredientsListProps) => {
    items = [
        {
            name: 'honey',
            quantity: 2,
            quantityType: QuantityType.TSP,
        },
    ];
    return (
        <div className="container text-start">
            <ul className="list-group">
                {items.map((item) => (
                    <li className="list-group-item">{`${item.quantity}${item.quantityType} ${item.name}`}</li>
                ))}
            </ul>
        </div>
    );
};

export default IngredientsList;
