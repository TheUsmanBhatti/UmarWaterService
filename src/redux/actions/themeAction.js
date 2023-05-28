import { store } from '../store';
const { dispatch } = store;

export const setBackgroundColor = (data) => {
    dispatch({
        type: 'SET_BACKGROUND_COLOR',
        payload: data,
    });
};