const initial_state = {
    targetCurrency: 'EUR',
    baseCurrency: 'USD'
}

const selectedCurrenyReducer = (state = initial_state, action) => {
    if (action.type === 'ADD_TO_CURRENCY') { 
        return action.payload;
    }
    else {
        return state;
    }
};

export default selectedCurrenyReducer;