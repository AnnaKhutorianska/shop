import { ActionTypes } from '../constants/action-type';

const initialState = {
	products: [],
	filters: {
		rate: 0,
		price: 0
	},
	cartProducts: [],
	product: null
};

export const productReducer = (state = initialState, { type, payload }) => {
	console.log(state);
	switch (type) {
		case ActionTypes.GET_ALL_PRODUCTS:
			return { ...state, products: payload };
		case ActionTypes.GET_PRODUCTS_BY_CATEGORY:
			return { ...state, products: payload };
		case ActionTypes.ADD_FILTERS:
			return { ...state, filters: payload };
		case ActionTypes.GET_PRODUCT:
			return { ...state, product: payload };
		case ActionTypes.ADD_PRODUCT_TO_CART:
			const product = state.cartProducts.find(prod => prod.productId === payload.productId);
			return {
				...state,
				cartProducts: product ? state.cartProducts : [...state.cartProducts, payload]
			};
		case ActionTypes.CHANGE_PRODUCTS_AMOUNT:
			return {
				...state,
				cartProducts: state.cartProducts.map(prod => prod.productId === payload.productId ? {...prod, amount: payload.amount} : prod)
			}	
		default:
			return state;
	}
};
