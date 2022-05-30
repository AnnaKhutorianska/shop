import React from 'react';
import Chart from '../Chart/Chart';
import FavoriteProducts from '../FavoriteProducts/FavoriteProducts';
import Logo from '../Logo/Logo';

import './Header.css';

function Header() {
    return (
        <div className='container header'>
            <h2>Online Shop</h2>
            <Logo />
            <div>
                <FavoriteProducts />
                <Chart />
            </div>
        </div>
    )
}

export default Header