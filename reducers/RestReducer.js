let initialState = {
  id: {
    img: 'string',
    name: 'string',
    telephone: 'number',
    reviews: 'number',
    stars: 'number',
    location: 'array',
    menu: 'object',
    yelpLink: 'string',
    openTableLink: 'string'
  }
}

const RestReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default RestReducer;
