let initialState = {
  "cuisines": [],
}

const YelpReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INITIAL_YELP':
      // console.log(action);
      const searchArea = Object.assign({}, action.area);
      return searchArea;
    default:
      return state
  }
};

export default YelpReducer;
