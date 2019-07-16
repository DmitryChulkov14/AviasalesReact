import { combineReducers } from 'redux';

import currencyReducer from './currencyReducer';
import stopsReducer from './stopsReducer';

export default combineReducers({
    currencyReducer,
    stopsReducer,
});