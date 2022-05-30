import React from 'react';
import { Card, Rate } from 'antd';
import { useSelector } from 'react-redux';

import './ProductsCards.css';

function countDiscout(price, discount) {
    return price - (price * discount/100);
}

function ProductsCards() {
    const products = useSelector(state => state.productReducer.products.products);
    console.log(products);

	return (
        <div className='cards-container'>
            {products?.map(product => (
                <Card
                className='card'
                key={product.id}
                    hoverable
                    style={{
                        width: 200
                    }}
                    cover={<img className='card-img' src={product.thumbnail} alt={product.title}/>}
                >
                    <p>{product.title}</p>
                    <Rate allowHalf disabled defaultValue={product.rating} />
                    <p className='card-price'>&#x24;{product.price}</p>
                    <p className='card-price-discount'>&#x24;{countDiscout(product.price, product.discountPercentage)}</p>
                    <button className='card-btn-cart'>add to chart</button>
                </Card>
            ))}
        </div>
    );
}

export default ProductsCards;
