import { ActionTypes } from '../constants/action-type';

const BASE_URL = 'https://dummyjson.com';

export const getAllProducts = () => {
	return (dispatch) => {
		fetch(`${BASE_URL}/products`)
			.then((response) => response.json())
			.then((data) => {
				dispatch({
					type: ActionTypes.GET_ALL_PRODUCTS,
					payload: data.products,
				});
			});
	};
};

export const getProductsByCategory = (category) => {
	return (dispatch) => {
		fetch(`${BASE_URL}/products/category/${category}`)
			.then((response) => response.json())
			.then((data) => {
				dispatch({
					type: ActionTypes.GET_PRODUCTS_BY_CATEGORY,
					payload: data.products,
				});
			});
	};
};

export const addProductsFilter = (filters) => {
	return (dispatch) => {
		dispatch({
			type: ActionTypes.ADD_FILTERS,
			payload: filters,
		});
	};
};

export const getProduct = (productId) => {
	return (dispatch) => {
		fetch(`${BASE_URL}/products/${productId}`)
			.then((response) => response.json())
			.then((data) => {
				dispatch({
					type: ActionTypes.GET_PRODUCT,
					payload: data,
				});
			});
	};
};

export const addProductToCart = (productId) => {
	return (dispatch) => {
		dispatch({
			type: ActionTypes.ADD_PRODUCT_TO_CART,
			payload: {
				productId,
				amount: 1,
			},
		});
	};
};

export const changeProductsAmount = (productId, amount) => {
	return (dispatch) => {
		dispatch({
			type: ActionTypes.CHANGE_PRODUCTS_AMOUNT,
			payload: {
				productId,
				amount
			},
		});
	};
};
