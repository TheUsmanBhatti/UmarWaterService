const initial_state = []

const favoriteReducer = (state = initial_state, action) => {
    if (action.type === 'ADD_TO_FAVORITE') { 
        return [...state, action.payload]
    }
    else if (action.type === 'REMOVE_FROM_FAVORITE') {
        const movieId = action.payload?.id;
        const data = state.filter(item => item?.id !== movieId);
        return data
    }
    else {
        return state;
    }
};

export default favoriteReducer;