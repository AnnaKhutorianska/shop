import React, { useEffect } from 'react';
import { InputNumber } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { getAllProducts, changeProductsAmount } from '../../app/actions/productActions';
import { countDiscout } from '../../utils/helper';

import './CartListProducts.css';

function CartListProducts() {
	const cart = useSelector((state) => state.productReducer.cartProducts);
	const products = useSelector((state) => state.productReducer.products);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllProducts());
	}, [])

	function onChange(id, value) {
		dispatch(changeProductsAmount(id, value));
	}

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
		<div className='cart-list-products'>
			<div className='cart-list-products-header'>
				<p className='cart-page-title'>Shopping Cart</p>
				<p className='cart-page-title'>{cart.length} items</p>
			</div>
			<div className='table-header'>
				<div className="table-col table-col-details">product details</div>
				<div className="table-col">quantity</div>
				<div className="table-col">price</div>
				<div className="table-col">total</div>
			</div>
			<div className='table-content'>
				{findProducts().map(product => {
					const price = countDiscout(product.product.price, product.product.discountPercentage); 
					return (
						<div className="table-row" key={product.productId}>
							<div className="table-col table-col-details">
								<img className='cart-table-img' src={product.product.thumbnail} alt={product.product.title} />
								<p className='cart-list-products-title'>{product.product.title}</p>
							</div>
							<div className="table-col">
								<InputNumber
									min={1}
									max={product.product.stock}
									defaultValue={product.amount}
									onChange={onChange.bind(null, product.productId)}
								/>
							</div>
							<div className="table-col">&#36;{price}</div>
							<div className="table-col">&#36;{product.amount * price}</div>
						</div>
					)
				})}
			</div>
		</div>
	);
}

export default CartListProducts;
