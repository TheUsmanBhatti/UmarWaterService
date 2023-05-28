import { store } from '../store';
const { dispatch } = store;

export const selectedCurrency = (data) => {
    dispatch({
        type: 'ADD_TO_CURRENCY',
        payload: data,
    });
};