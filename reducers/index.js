import { combineReducers } from 'redux';
import testReducer from './testReducer';
import UserReducer from './UserReducer';
import LocationReducer from './LocationReducer';
import YelpReducer from './YelpReducer';

const rootReducer = combineReducers({
    test: testReducer,
    user: UserReducer,
    area: LocationReducer,
    yelp: YelpReducer,
});


export default rootReducer;
