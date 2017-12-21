let initialState = {
  title: '',
  dates: [],
  meal: '',
  coords: {
    lat: 0,
    long: 0,
    latDelta: .5,
    longDelta: .5,
  },
  distance: '1-3 miles',
  cuisines: [],
  friendsSelected: 0,
}

const FormReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TITLE_CHANGE':
      const titleState = Object.assign({}, state);
      titleState.title = action.title;
      console.log('TITLE STATE', titleState);
      return titleState;
    case 'SET_DATES':
      const dateState = Object.assign({}, state);
      dateState.dates = action.dates;
      console.log('DATE STATE', dateState)
      return dateState;
    case 'CHOOSE_MEAL':
      const mealState = Object.assign({}, state);
      mealState.meal = action.meal;
      console.log('MEAL STATE', mealState)
      return mealState;
    case 'SET_LOCATION':
      const locationState = Object.assign({}, state);
      locationState.coords = action.coords;
      console.log('LOCATION STATE', locationState)
      return locationState;
    case 'SET_DISTANCE':
      const distanceState = Object.assign({}, state);
      distanceState.distance = action.distance;
      console.log('DISTANCE STATE', distanceState);
      return distanceState;
    case 'SET_CUISINE':
      const cuisineState = Object.assign({}, state);
      cuisineState.cuisines = action.cuisine;
      console.log('CUISINE STATE', cuisineState);
      return cuisineState;
    default:
      return state
  }
};

export default FormReducer;
