import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Order from '../../components/Order/Order';
import { getAllProducts } from '../../app/actions/productActions';
import CartListProducts from '../../components/CartListProducts/CartListProducts';

import './CartPage.css';

function CartPage() {
	const cart = useSelector((state) => state.productReducer.cartProducts);
	const products = useSelector((state) => state.productReducer.products);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllProducts());
	}, [])

	function findProducts() {
		if (!products.length || !cart.length) return [];

		return cart.map(item => {
			const product = products.find(prod => prod.id === item.productId);

			return {
				...item,
				product
			};
		});
	}

    return (
	<div className="cart-page">
	   <CartListProducts products={findProducts()}/>
	   <Order products={findProducts()}/>
	</div>
     );
}

export default CartPage;
