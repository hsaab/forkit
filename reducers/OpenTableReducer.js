let initialState = {
  url : ''
}

const openTable = (state = initialState, action) => {
  switch (action.type) {
    case 'OPENTABLE_URL':
      const newState = Object.assign({}, state);
      newState.url = action.url
      // console.log('OPEN TABLEkjadfkajdfakjdfakdfjalkdsfjal', newState);
      return newState;
    default:
      return state
  }
};

export default openTable;
