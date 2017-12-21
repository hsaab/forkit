let initialState = {
  events: [],
  current: {}
}

const StatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CLICKED':
      const clickedState = Object.assign({}, action.clicked);
      clickedState.cuisines = clickedState.cuisines.split(',');
      console.log('CLICKSKSJDNFKSJDFNKJDSFNKJDNF', clickedState);
      return clickedState;
    default:
      return state
  }
};

export default StatusReducer;
