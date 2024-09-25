import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cocktailImage from '../imgs/cocktail.png';

const Header: React.FC = () => {
    const [name, setName] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value.replace(/\s+/g, " "));
    
    const handleBlur = () => setName((prev) => prev.trim());

    return (
        <header>
            <Link to="/" className='logo-link'>
                <img src={cocktailImage} alt="Cocktail icon" className='cocktail-icon' /> Sip & Savor
            </Link>
            <div className='search-container'>
                <input type="text" placeholder='Enter the name of the cocktail' value={name} onChange={handleChange} onBlur={handleBlur} required />
                <Link to={`/cocktails/name:${name}`}>
                    <button onClick={() => setName("")}>Search</button>
                </Link>
            </div>
            <div className='cart-container'>
                <i className='fas fa-shopping-cart'></i>
                <div className='bubble-icon'>
                    <span></span>
                </div>
            </div>
        </header>
    );
}

export default Header;
