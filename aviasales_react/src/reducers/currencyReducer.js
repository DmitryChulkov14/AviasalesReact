const initialState = {currency : 'RUB'};

export default function currencyReducer(state = initialState, action) {
    if (action.type === 'CHANGE_CURRENCY') {
        return {currency: action.currency};
    }
    return state;
}