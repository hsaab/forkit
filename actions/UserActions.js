function addUserAll(firstName, lastName) {
  return {
    type: 'ADD_ALL',
    firstName,
    lastName,
  }
}

function login(username, password) {
  return {
    type: 'LOGIN',
    username: username,
    password: password
  }
}

export { addUserAll, login }
