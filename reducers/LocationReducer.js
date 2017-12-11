let initialState = {
  "coords": {
    "accuracy": 0,
    "altitude": 0,
    "altitudeAccuracy": 0,
    "heading": 0,
    "latitude": 0,
    "longitude": 0,
    "speed": 0,
  }
}

const LocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'YOU_HERE':
      // console.log(action);
      const locationInfo = Object.assign({}, action.location);
      return locationInfo;
    default:
      return state
  }
};

export default LocationReducer;
