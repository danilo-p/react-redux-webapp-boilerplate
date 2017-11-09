const ADD_USER = 'ADD_USER';
const CREATE_USER= 'CREATE_USER';CREATE_USER
const

const reducer = (state, action) => {
  switch (action.type) {
  case 'ADD_USER':
    return [
      ...state,
      action.user,
    ];
  default:
    return state;
  }
};

const addUser = (user) => {
  return {
    user,
    type: ADD_USER,
  };
};



export {
  reducer as default,
  createUser,
}