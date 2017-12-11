import { combineReducers } from 'redux';
import testReducer from './testReducer';
import UserReducer from './UserReducer';

const rootReducer = combineReducers({
    test: testReducer,
    user: UserReducer
});


export default rootReducer;
