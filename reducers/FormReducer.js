let initialState = {
  title: '',
  dates: [],
  meal: 'BrunDinner',
  coords: {
    lat: 0,
    long: 0,
    latDelta: .5,
    longDelta: .5,
  },
  distance: '1-3 miles',
  cuisines: []
}

const FormReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TITLE_CHANGE':
      console.log(action);
      const titleState = Object.assign({}, state);
      titleState.title = action.title;
      console.log(titleState);
      return titleState;
    case 'SET_DATES':
      console.log(action);
      const dateState = Object.assign({}, state);
      dateState.dates = action.dates;
      console.log(dateState);
      return dateState;
    case 'CHOOSE_MEAL':
      console.log(action);
      const mealState = Object.assign({}, state);
      mealState.meal = action.meal;
      console.log(mealState);
      return mealState;
    case 'SET_LOCATION':
      console.log(action);
      const locationState = Object.assign({}, state);
      locationState.coords = action.coords;
      console.log(locationState);
      return locationState;
    case 'SET_DISTANCE':
      console.log(action);
      const distanceState = Object.assign({}, state);
      distanceState.distance = action.distance;
      console.log(distanceState);
      return distanceState;
    case 'SET_CUISINE':
      console.log(action);
      const cuisineState = Object.assign({}, state);
      cuisineState.cuisines = action.cuisine;
      console.log(cuisineState);
      return cuisineState;
    default:
      return state
  }
};

export default FormReducer;
