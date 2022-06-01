import { ActionTypes } from '../constants/action-type';

export const getAllProducts = () => {
    const URL = 'https://dummyjson.com/products';

    return (dispatch) => {
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: ActionTypes.GET_ALL_PRODUCTS,
                    payload: data.products
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
                    payload: data.products
                })
            })

    };
};

export const addProductsFilter = (filters) => {
    return {
        type: ActionTypes.ADD_FILTERS,
        payload: filters
    }
}

export const getProduct = (productId) => {
    const URL = `https://dummyjson.com/products/${productId}`;

    return (dispatch) => {
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: ActionTypes.GET_PRODUCT,
                    payload: data
                })
            })

    };
};