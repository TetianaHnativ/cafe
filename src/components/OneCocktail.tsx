import React from 'react';
import { cocktailsSelector } from '../store/selectors.ts';
import { useSelector } from 'react-redux';

const OneCocktail: React.FC = () => {
    const cocktail = useSelector(cocktailsSelector)[0];

    if (!cocktail) {
        return <h2>No cocktail available</h2>;
    }

    const {
        strDrink,
        strDrinkThumb,
        strAlcoholic,
        strCategory,
        strGlass,
    } = cocktail;

    return (
        <div className="cocktail-information">
            <img src={strDrinkThumb} alt={strDrink} />
            <h2>{strDrink}</h2>
            <div className='cocktail-details'>
                <h3>Details</h3>
                <p><span>Category:</span> {strCategory}</p>
                <p><span>Type:</span> {strAlcoholic}</p>
                <p><span>Glass:</span> {strGlass}</p>
            </div>
        </div>
    );
}

export default OneCocktail;