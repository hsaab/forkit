let initialState = {
  id: {
    userId: 'id',
    groupId: 'id',
    q1: 'string',
    q2: 'string',
    q3: 'string'
  }
}

const PrefReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default PrefReducer;
