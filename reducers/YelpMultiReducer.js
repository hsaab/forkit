let initialState = {
  "price": "",
  "ethnic": "",
  "date": "",
  "time": "5:30",
}

const YelpMultiReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PRICE_CHECK_MULTI':
      const newState = Object.assign({}, state);
      newState.price = action.price;
      // console.log(newState);
      return newState;
    case 'FOOD_CHOICE_MULTI':
      const foodState = Object.assign({}, state);
      foodState.ethnic = action.ethnic;
      console.log('FOOD CHOICE REDUCER', foodState)
      return foodState;
    case 'DATE_CHOICE_MULTI':
      const dateState = Object.assign({}, state);
      dateState.date = action.date;
      console.log('YELP MULTI REDUCER ', dateState);
      return dateState;
    case 'TIME_CHOICE_MULTI':
      const timeState = Object.assign({}, state);
      timeState.time = action.time;
      console.log('TIME CHOICE MULTI REDUCER ', timeState);
      return timeState;
    default:
      return state
  }
};

export default YelpMultiReducer;
