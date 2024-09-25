import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import CocktailsPage from '../pages/CocktailsPage';
import CocktailPage from '../pages/CoctailPage';

const Content: React.FC = () => {
    return (
        <BrowserRouter>
            <main>
                <Routes>
                    <Route path="/" element={<MainPage></MainPage>} />
                    <Route path="/cocktails" element={<CocktailsPage></CocktailsPage>} />
                    <Route path="/cocktail" element={<CocktailPage></CocktailPage>} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default Content;