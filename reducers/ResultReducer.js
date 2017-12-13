let initialState = {
  results: [],
  singleResult: []
}

const ResultReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESULTS':
      const final = Object.assign({}, state);
      final.results = action.results;
      console.log('Final RESULTS', final);
      return final;
    case 'SINGLE_RESULT':
      const result = Object.assign({}, state);
      result.singleResult = action.result;
      console.log('Picked place', result);
      return result;
    default:
      return state;
  }
};

export default ResultReducer;
