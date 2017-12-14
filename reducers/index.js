import { combineReducers } from 'redux';
import test, * as fromTest from './testReducer.js';
import user, * as fromUser from './UserReducer.js';

export default combineReducers({
    test,
    user,
});
