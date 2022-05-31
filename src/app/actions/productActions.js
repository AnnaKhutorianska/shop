import { ActionTypes } from '../constants/action-type';

export const getAllProducts = () => {
    const URL = 'https://dummyjson.com/products';

    return (dispatch) => {
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: ActionTypes.GET_ALL_PRODUCTS,
                    payload: data
                })
            })

    };
};

export const getProductsByCategory = (category) => {
    const URL = `https://dummyjson.com/products/category/${category}`;

    return (dispatch) => {
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: ActionTypes.GET_PRODUCTS_BY_CATEGORY,
                    payload: data
                })
            })

    };
};

export const filterProducts = (filters) => {
    return {
        type: ActionTypes.FILTER_PRODUCTS,
        payload: filters
    }
}