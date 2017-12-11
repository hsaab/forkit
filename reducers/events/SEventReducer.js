let initialState = {
  id: {
    userId: 'id',
    dateTime: 'timestamp',
    transType: 'string',
    restId: 'id',
    prefId: 'id',
    forked: 'true/false'
  }
}

const SEventReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default SEventReducer;
