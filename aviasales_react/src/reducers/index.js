import { combineReducers } from 'redux';

import currencyReducer from './currencyReducer';
import stopsReducer from './stopsReducer';
import userModalReducer from './userModalReducer'

export default combineReducers({
    currencyReducer,
    stopsReducer,
    userModalReducer,
});