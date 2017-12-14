let initialState = {
  url : ''
}

const menu = (state = initialState, action) => {
  switch (action.type) {
    case 'MENU_URL':
      const newState = Object.assign({}, state);
      newState.url = action.url
      return newState;
    default:
      return state
  }
};

export default menu;
