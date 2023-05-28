const initial_state = {
    color: 'blue',
}

const selectedBackgroundColor = (state = initial_state, action) => {
    if (action.type === 'SET_BACKGROUND_COLOR') { 
        return action.payload;
    }
    else {
        return state;
    }
};

export default selectedBackgroundColor;