import React, { useEffect } from 'react';
import MainLayout from '../components/layouts/MainLayout';
import { getProduct } from '../app/actions/productActions';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

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
            <div>{product.title}</div>
            <img src={product.thumbnail} alt={product.title} />
        </MainLayout>
    )
}

export default ProductPage