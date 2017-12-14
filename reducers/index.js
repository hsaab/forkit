import { combineReducers } from 'redux';
import testReducer from './testReducer';
import UserReducer from './UserReducer';
import LocationReducer from './LocationReducer';
import YelpReducer from './YelpReducer';
import ResultReducer from './ResultReducer';
import OpenTableReducer from './OpenTableReducer';
import menuReducer from './menuReducer';

const rootReducer = combineReducers({
    test: testReducer,
    user: UserReducer,
    area: LocationReducer,
    yelp: YelpReducer,
    results: ResultReducer,
    openTable: OpenTableReducer,
    menu: menuReducer
});


export default rootReducer;
