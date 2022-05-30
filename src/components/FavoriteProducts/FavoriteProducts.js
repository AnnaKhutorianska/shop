import React from 'react';
import heartLogo from '../../assets/images/heart.png';

import './FavoriteProducts.css';

function FavoriteProducts() {
    return (
        <div className='fav-prod-btn'>
            <img src={heartLogo} alt='heartLogo' className='heart-img'/>
        </div>
    )
}

export default FavoriteProducts