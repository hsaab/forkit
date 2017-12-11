let initialState = {
  id: {
    userId: ['id1', 'id2'],
    title: 'string',
    dateTime: 'timestamp',
    transType: 'string',
    prefId: ['id1', 'id2'],
    restId: 'id',
    ongoing: 'true/false',
    forked: 'true/false'
  }
}

const GEventReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default GEventReducer;
