import React from 'react';
import CartButton from '../CartButton/CartButton';
import FavoriteProducts from '../FavoriteProducts/FavoriteProducts';
import Logo from '../Logo/Logo';

import './Header.css';

function Header() {
    return (
        <div className='header'>
            <h2>Online Shop</h2>
            <Logo />
            <div>
                <FavoriteProducts />
                <CartButton />
            </div>
        </div>
    )
}

export default Header