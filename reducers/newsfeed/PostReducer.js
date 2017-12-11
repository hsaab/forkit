let initialState = {
  id: {
    groupId: 'id',
    likes: ['userId1','userId2'],
    commentId: ['commentId1', 'commentId2']
  }
}

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default PostReducer;
