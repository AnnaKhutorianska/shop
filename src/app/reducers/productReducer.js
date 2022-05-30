import { ActionTypes } from "../constants/action-type";

const initialState = {
    products: [],
}

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.GET_ALL_PRODUCTS:
            return { ...state, products: payload };
        case ActionTypes.GET_PRODUCTS_BY_CATEGORY:
            return { ...state, products: payload };
        default:
            return state;
    }
};