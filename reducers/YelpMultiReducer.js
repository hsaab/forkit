let initialState = {
  "price": "",
  "ethnic": "",
  "date": "",
  "time": "",
}

const YelpMultiReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PRICE_CHECK_MULTI':
      const newState = Object.assign({}, state);
      newState.price = action.price;
      return newState;
    case 'FOOD_CHOICE_MULTI':
      const foodState = Object.assign({}, state);
      foodState.ethnic = action.ethnic;
      return foodState;
    case 'DATE_CHOICE_MULTI':
      const dateState = Object.assign({}, state);
      dateState.date = action.date;
      return dateState;
    case 'TIME_CHOICE_MULTI':
      const timeState = Object.assign({}, state);
      timeState.time = action.time;
      return timeState;
    default:
      return state
  }
};

export default YelpMultiReducer;
