import { ActionTypes } from '../constants/action-type';

const URL = 'https://dummyjson.com/products/categories';

export function getCategories () {
    return (dispatch) => {
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: ActionTypes.GET_CATEGORIES,
                    payload: data
                })
            })

    };
};