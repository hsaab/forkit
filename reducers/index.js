import { combineReducers } from 'redux';
import testReducer from './testReducer';
import UserReducer from './UserReducer';
import LocationReducer from './LocationReducer';
import YelpReducer from './YelpReducer';
import ResultReducer from './ResultReducer';
import OpenTableReducer from './OpenTableReducer';
import menuReducer from './menuReducer';
import FormReducer from './FormReducer';
import FriendReducer from './FriendReducer';
import StatusReducer from './StatusReducer';
import YelpMultiReducer from './YelpMultiReducer';
import LastPersonReducer from './LastPersonReducer';
import FinalMultiReducer from './FinalMultiReducer';

const rootReducer = combineReducers({
    test: testReducer,
    user: UserReducer,
    area: LocationReducer,
    yelp: YelpReducer,
    results: ResultReducer,
    openTable: OpenTableReducer,
    menu: menuReducer,
    form: FormReducer,
    yelpMulti: YelpMultiReducer,
    friend: FriendReducer,
    status: StatusReducer,
    lastPerson: LastPersonReducer,
    finalMulti: FinalMultiReducer
});


export default rootReducer;
