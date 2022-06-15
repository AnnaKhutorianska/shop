import React from 'react';
import { InputNumber } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getAllProducts, changeProductsAmount } from '../../app/actions/productActions';
import { countDiscout } from '../../utils/helper';

import './CartListProducts.css';

function CartListProducts({ products }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	function onChange(id, value) {
		dispatch(changeProductsAmount(id, value));
	}

	function handleClick() {
		navigate('/')
	}

	return (
		<div className='cart-list-products'>
			<div className='cart-list-products-header'>
				<p className='cart-page-title'>Shopping Cart</p>
				<p className='cart-page-title'>{products.length} items</p>
			</div>
			{!products.length ? <div className='cart-list-products-empty'>Cart is empty</div> :
				<>
					<div className='table-header'>
						<div className="table-col table-col-details">product details</div>
						<div className="table-col">quantity</div>
						<div className="table-col">price</div>
						<div className="table-col">total</div>
					</div>
					<div className='table-content'>
						{products.map(product => {
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
				</>
			}
			<button className='cart-list-products-btn-continue' onClick={handleClick}>&#8592; Continue Shopping</button>

		</div>
	);
}

export default CartListProducts;
