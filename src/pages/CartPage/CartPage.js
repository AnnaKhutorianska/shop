import React from 'react';

import Order from '../../components/Order/Order';
import CartListProducts from '../../components/CartListProducts/CartListProducts';

import './CartPage.css';

function CartPage() {
	return (
        <div className='container cart-page'>
            <CartListProducts />
            <Order />
        </div>
    );
}

export default CartPage;
