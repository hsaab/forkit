let initialState = {
  firstname: '',
  lastname: '',
  friends: [],
  forks: [],
  wishlist: [],
  os: ''
}

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      const userInfo = Object.assign({}, action.info);
      return userInfo
    default:
      return state
  }
};

export default UserReducer;
