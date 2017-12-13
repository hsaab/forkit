let initialState = {
  "cuisines": [],
  "price": "",
  "ethnic": "",
  "distance": 0
}

const YelpReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INITIAL_YELP':
      // console.log(action);
      const searchArea = Object.assign({}, action.area);
      return searchArea;
    case 'PRICE_CHECK':
      const newState = Object.assign({}, state);
      newState.price = action.price;
      console.log('Reducer state', newState);
      return newState;
    case 'FOOD_CHOICE':
      const foodState = Object.assign({}, state);
      foodState.ethnic = action.ethnic;
      console.log('Ethnic state', foodState);
      return foodState;
    case 'DISTANCE_TYPE':
      const finalState = Object.assign({}, state);
      finalState.distance = action.distance;
      console.log('Final state', finalState);
      return finalState;
    default:
      return state
  }
};

export default YelpReducer;
