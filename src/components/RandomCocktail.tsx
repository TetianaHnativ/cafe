import React from 'react';
import OneCocktail from "./OneCocktail.tsx";
import OrderButton from './OrderButton.tsx';

const RandomCocktail: React.FC = () => {
    return (
        <div className='random-cocktail'>
            <div className="recommendation-label">
                <span>Personal recommendation</span>
            </div>
            <a href="#">
                <OneCocktail></OneCocktail>
            </a>
            <OrderButton></OrderButton>
        </div>
    );
}

export default RandomCocktail;