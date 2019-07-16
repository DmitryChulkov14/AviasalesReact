const initialState = ['all'];

export default function stopsReducer(state = initialState, action) {
    if (action.type === 'ADD_STOP') {
        return [
            ...state,
            action.stop
        ];
    } else if (action.type === 'REMOVE_STOP') {
        return [
            ...state.filter(stop => stop !== action.stop)
        ];
    }
    return state;
}