import { ActionTypes } from "../constants/action-type";

const initialState = {
    products: [],
    filtredProducts: []
}

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.GET_ALL_PRODUCTS:
            return { ...state, products: payload.products };
        case ActionTypes.GET_PRODUCTS_BY_CATEGORY:
            return { ...state, products: payload.products };
        case ActionTypes.FILTER_PRODUCTS:
            console.log(state.products, payload);
            return {
                ...state,
                filtredProducts: state.products.filter(product => product.price <= payload.price && product.rating >= payload.rate)
            }
        default:
            return state;
    }
};