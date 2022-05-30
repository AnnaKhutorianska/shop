import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Select } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from '../../app/actions/categotyActions';

const { Option } = Select;

function Menu() {
    const [value, setValue] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const categories = useSelector((state) => state.categoryReducer.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        setValue(location.pathname);
        dispatch(getCategories());
    }, []);

    const handleChange = (optionValue) => {
        setValue(optionValue);
        navigate(optionValue);
    };

    return (
        <div>
            <Select
                value={categories.length ? value : undefined}
                style={{ width: 150 }}
                onChange={handleChange}
            >
                <Option key={'/'} value='/'>all products</Option>
                {categories.map((category) => (
                    <Option key={category} value={`/category/${category}`}>
                        {category}
                    </Option>
                ))}
            </Select>
        </div >
    );
}

export default Menu;
