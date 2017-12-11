let initialState = {
  id: {
    userId: 'id',
    postId: 'id',
    content: 'string',
    dateTime: 'timestamp' 
  }
}

const ComReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default ComReducer;
