let initialState = {
  group_id: '',
  host_id: '',
  date: '',
  meal: '',
  radius: ''
}

const FinalMultiReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FINAL_MULTI':
      const lastDecision = Object.assign({} , action.final);
      console.log('FINAL MULTI REDUCER', lastDecision);
      return lastDecision;
    default:
      return state
  }
};

export default FinalMultiReducer;
