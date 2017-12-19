let initialState = {
  friends: []
}

const FriendReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INVITE_FRIEND':
      const friendState = Object.assign({}, state);
      friendState.friends = friendState.friends.concat(action.friend);
      return friendState;
    case 'UNINVITE_FRIEND':
      const uninviteFriendState = Object.assign({}, state);
      for (var i = 0; i < uninviteFriendState.friends.length; i++) {
        if (uninviteFriendState.friends[i].name === action.friend.name) {
          uninviteFriendState.friends.splice(i, 1);
        }
      }
      return uninviteFriendState;
    default:
      return state
  }
};

export default FriendReducer;
