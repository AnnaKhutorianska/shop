import React, { useEffect } from 'react';
import { Carousel } from 'antd';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import MainLayout from '../components/layouts/MainLayout';
import { getProduct, addProductToCart } from '../app/actions/productActions';
import { countDiscout } from '../utils/helper';
import CartButton from '../components/CartButton/CartButton';

import './ProductPage.css';

function ProductPage() {
    const params = useParams();
    const dispatch = useDispatch();
    const product = useSelector(state => state.productReducer.product);
    console.log(product);

    useEffect(() => {
        dispatch(getProduct(params.productId));
    }, [params.productId]);

    return (
        <MainLayout>
            {product && (
                <div className='product-page'>
                    <div>
                        <div className='product-page-title'>{product.title}</div>
                        <Carousel
                            autoplay
                            autoplaySpeed={2000}
                        >
                            {product.images.map(image => (
                                <div key={image} style={{ height: 100 }}>
                                    <img src={image} alt={image} />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                    <div>
                        <p className='product-page-desciption'>{product.description}</p>
                        <p className='card-price'>&#x24;{product.price}</p>
                        <p className='card-price-discount'>&#x24;{countDiscout(product.price, product.discountPercentage)}</p>
                        <CartButton className={'chart-btn'} onClick={() => dispatch(addProductToCart(product.id))} />
                    </div>
                </div>
            )}
        </MainLayout>
    )
}

export default ProductPage