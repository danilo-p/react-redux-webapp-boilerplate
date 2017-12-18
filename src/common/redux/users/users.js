const ADD_USER = 'ADD_USER';

const addUser = user => ({
  user,
  type: ADD_USER,
});

const reducer = (state, action) => {
  if (!state) {
    return [];
  }

  switch (action.type) {
  case 'ADD_USER':
    return [
      ...state,
      addUser(action.user),
    ];
  default:
    return state;
  }
};


export {
  reducer as default,
  addUser,
  ADD_USER,
};
