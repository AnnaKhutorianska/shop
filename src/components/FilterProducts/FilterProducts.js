import React, { useState, useEffect } from 'react';
import { Rate, Slider } from 'antd';
import { useDispatch } from 'react-redux';
import { addProductsFilter } from '../../app/actions/productActions';

function FilterProducts() {
    const [filters, setFilters] = useState({
        rate: 0,
        price: 0
    });
    const dispatch = useDispatch();

    const handleChange = (name, value) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: value
        }));
    };

    useEffect(() => {
        dispatch(addProductsFilter(filters));
    }, [filters])

    return (
        <div className="filter-products">
            <p>Rating:</p>
            <Rate
                onChange={handleChange.bind(null, 'rate')}
                value={filters.rate}
            />
            <p>Price:</p>
            <Slider
                onChange={handleChange.bind(null, 'price')}
                max={2000} 
                value={filters.price}
            />
        </div>
    );
};

export default FilterProducts;
