import IngredientsList from './IngredientsList';
import Method from './Method';

interface RecipePageProps {
    title: string;
}

const RecipePage = ({ title }: RecipePageProps) => {
    return (
        <>
            <div className="container text-center">
                <h1>{title}</h1>
                <img
                    style={{
                        width: 'auto',
                        height: '400px',
                        backgroundColor: 'red',
                        borderRadius: '8px',
                    }}
                    src="/no-knead-focaccia.webp"
                ></img>
                <div className="container text-center">
                    <div className="row align-items-start">
                        <div className="col">
                            <IngredientsList></IngredientsList>
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
