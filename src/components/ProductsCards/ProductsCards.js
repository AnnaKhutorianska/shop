import React, { useEffect, useState } from 'react';
import { Rate } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { countDiscout } from '../../utils/helper';
import CartButton from '../CartButton/CartButton';
import { addProductToCart } from '../../app/actions/productActions';

import './ProductsCards.css';

function ProductsCards() {
    const {products, filters} = useSelector(state => state.productReducer);
    const [filtredProducts, setFilteredProducts] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        filterProducts();
    }, [filters, products])
     
    function filterProducts() {
        if(!filters.price && !filters.rate) {
            return setFilteredProducts(products);
        }

        const prods = products.filter(product => product.price <= filters.price && product.rating >= filters.rate);
        setFilteredProducts(prods);
    }

    function handleClick(id) {
        dispatch(addProductToCart(id));
    }

	return (
        <div className='cards-container'>
            {filtredProducts.map(product => (
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
                            <CartButton className='card-btn-cart' onClick={handleClick.bind(null, product.id)} />
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default ProductsCards;
