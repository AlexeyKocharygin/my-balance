import { combineReducers } from 'redux';
import incomeReducer from './income';

const rootReducer = combineReducers({
    income: incomeReducer
});

export default rootReducer;