import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCocktails } from '../store/reducer.ts';
import { AppDispatch } from '../store/store.ts';
import { cocktailsSelector } from '../store/selectors.ts';
import OneCocktail from '../components/OneCocktail.tsx';

const CocktailPage: React.FC = () => {
    const cocktail = useSelector(cocktailsSelector)[0];

    if (!cocktail) {
        return <h2>No cocktail available</h2>;
    }
    const {
        strInstructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
        strIngredient6,
        strMeasure1,
        strMeasure2,
        strMeasure3,
        strMeasure4,
        strMeasure5,
        strMeasure6,
    } = cocktail;

    const ingredients = [
        { ingredient: strIngredient1, measure: strMeasure1 },
        { ingredient: strIngredient2, measure: strMeasure2 },
        { ingredient: strIngredient3, measure: strMeasure3 },
        { ingredient: strIngredient4, measure: strMeasure4 },
        { ingredient: strIngredient5, measure: strMeasure5 },
        { ingredient: strIngredient6, measure: strMeasure6 },
    ].filter(item => item.ingredient);

    return (
        <div className="cocktail-page">
            <div className='cocktail-ingredients'>
                <h3>Ingredients</h3>
                <ul>
                    {ingredients.map((item, index) => (
                        <li key={index}>
                            {item.measure} {item.ingredient}
                        </li>
                    ))}
                </ul>
            </div>

            <div className='cocktail-instructions'>
                <h3>Instructions</h3>
                <p>{strInstructions}</p>
            </div>
        </div>
    );
}

export default CocktailPage;