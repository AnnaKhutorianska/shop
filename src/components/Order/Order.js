import React, { useState } from 'react';
import { Select } from 'antd';

import { countDiscout } from '../../utils/helper'
import './Order.css';

const { Option } = Select;


function Order({ products }) {
	const [deliveryPlan, setDeliveryPlan] = useState(0);

	function handleChange(value) {
		setDeliveryPlan(+value);
	}

	function countTotalPrice() {
		return products.reduce((sum, product) => {
			return sum + (countDiscout(product.product.price, product.product.discountPercentage) * product.amount);
		}, 0)
	}
	
	return (
		<div className='order'>
			<div className='order-header cart-page-title'>Order Summary</div>
			<div className='order-details'>
				<div className='flex-container'>
					<p>ITEMS</p>
					<p>&#36;{countTotalPrice()}</p>
				</div>
				<div>
					<p>SHIPPING</p>
					<Select
						defaultValue="Select delivery plan"
						style={{
							width: 400,
						}}
						onChange={handleChange}
					>
						<Option value='9'>Standart delivery - &#36;9</Option>
						<Option value='49'>Fast delivery - &#36;49</Option>
						<Option value='99'>Premium delivery - &#36;99</Option>
					</Select>
				</div>
			</div>
			<div>
				<div className='flex-container'>
					<p>TOTAL COST</p>
					<p>&#36;{countTotalPrice() + deliveryPlan}</p>
				</div>
				<div className='order-check-btn-wrapper'>
					<button className='order-check-btn'>CHECK</button>
				</div>
			</div>
		</div>
	);
}

export default Order;
