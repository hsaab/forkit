let initialState = {
  events: [],
  current: {}
}

const StatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEND_STATUS':
      console.log(action);
      const newState = Object.assign({}, state);
      newState.events.push(action.status);
      console.log('HELLO FROM STATUS REDUCERERERERER', newState);
      return newState;
    case 'CLICKED':
      console.log(action);
      const clickedState = Object.assign({}, action.clicked);
      console.log('HELLO FROM CLICKED', clickedState);
      return clickedState
    default:
      return state
  }
};

export default StatusReducer;
