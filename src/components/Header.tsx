import React from 'react';
import cocktailImage from '../imgs/cocktail.png';

const Header: React.FC = () => {
    return (
        <header>
            <a href='#'>
                <img src={cocktailImage} alt="Cocktail icon" className='cocktail-icon' /> Sip & Savor
            </a>
            <div className='search-container'>
                <input type="text" placeholder='Enter the name of the cocktail' />
                <button>Search</button>
            </div>
            <div className='cart-container'>
                <i className='fas fa-shopping-cart'></i>
                <div className='bubble-icon'>
                    <span>10</span>
                </div>
            </div>
        </header>
    );
}

export default Header;
