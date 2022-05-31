import React from 'react';
import { Rate } from 'antd';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './ProductsCards.css';

function countDiscout(price, discount) {
    return Math.round(price - (price * discount/100));
}

function ProductsCards() {
    const products = useSelector(state => state.productReducer.filtredProducts);

	return (
        <div className='cards-container'>
            {products?.map(product => (
                <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className='link'
                >
                    <div className='card'>
                        <img className='card-img' src={product.thumbnail} alt={product.title}/>
                        <div className='card-info'>
                            <p className='card-title'>{product.title}</p>
                            <Rate
                                allowHalf
                                disabled
                                defaultValue={product.rating}
                                className='card-rating'
                            />
                            <p className='card-price'>&#x24;{product.price}</p>
                            <p className='card-price-discount'>&#x24;{countDiscout(product.price, product.discountPercentage)}</p>
                            <button className='card-btn-cart'>add to chart</button>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default ProductsCards;
