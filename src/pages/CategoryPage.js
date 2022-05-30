import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllProducts, getProductsByCategory } from '../app/actions/productActions';
import MainLayout from '../components/layouts/MainLayout';
import FilterProducts from '../components/FilterProducts/FilterProducts';
import ProductsCards from '../components/ProductsCards/ProductsCards';

function CategoryPage() {
    const params = useParams();
    const dispatch = useDispatch();
    
    useEffect(() => {
        console.log('category=', params.categoryName);
        if (params.categoryName === undefined) {
            dispatch(getAllProducts())
        } else {
            dispatch(getProductsByCategory(params.categoryName));
        }

    }, [params.categoryName]);

    return (
        <MainLayout>
            <div className='container'>
                <FilterProducts />
                <ProductsCards />
            </div>
        </MainLayout>
    )
}

export default CategoryPage