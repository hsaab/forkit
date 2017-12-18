let initialState = {
  friends: []
}

const FriendReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INVITE_FRIEND':
      console.log(action);
      const friendState = Object.assign({}, state);
      friendState.friends.concat(action.friend);
      console.log(friendState);
      return friendState;
    default:
      return state
  }
};

export default FriendReducer;
