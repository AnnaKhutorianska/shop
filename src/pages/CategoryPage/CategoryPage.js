import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllProducts, getProductsByCategory } from '../../app/actions/productActions';
import MainLayout from '../../components/layouts/MainLayout';
import FilterProducts from '../../components/FilterProducts/FilterProducts';
import ProductsCards from '../../components/ProductsCards/ProductsCards';
import Menu from '../../components/Menu/Menu';

import './CategoryPage.css';

function CategoryPage() {
    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (params.categoryName === undefined) {
            dispatch(getAllProducts())
        } else {
            dispatch(getProductsByCategory(params.categoryName));
        }
    }, [params.categoryName]);

    return (
        <MainLayout>
            <Menu />
            <div className='category-page'>
                <FilterProducts />
                <ProductsCards />
            </div>
        </MainLayout>
    )
}

export default CategoryPage;
