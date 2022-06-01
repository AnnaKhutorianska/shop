import { ActionTypes } from '../constants/action-type';

const initialState = {
	products: [],
	filters: {
		rate: 0,
		price: 0
	},
	product: null
};

export const productReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ActionTypes.GET_ALL_PRODUCTS:
			return { ...state, products: payload };
		case ActionTypes.GET_PRODUCTS_BY_CATEGORY:
			return { ...state, products: payload };
		case ActionTypes.ADD_FILTERS:
			return { ...state, filters: payload };
		case ActionTypes.GET_PRODUCT:
			return { ...state, product: payload };
		default:
			return state;
	}
};
