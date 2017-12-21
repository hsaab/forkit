let initialState = {
  isLast: false
}

const LastPersonReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LAST':
      const lastPerson = Object.assign({} , state);
      lastPerson.isLast = action.last;
      console.log('LAST PERSON REDUCER', lastPerson);
      return lastPerson;
    default:
      return state
  }
};

export default LastPersonReducer;
