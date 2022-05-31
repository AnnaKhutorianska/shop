import { Rate, Slider } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterProducts } from '../../app/actions/productActions'

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
        dispatch(filterProducts(filters));
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
