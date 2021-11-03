import jwtDecode from 'jwt-decode';

const initialState = {
  name: null,
  email: null,
  userId: null,
  token: localStorage.getItem('token'),
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SIGNUP':
  case 'LOAD_USER':
  case 'LOGIN': {
    const loggedUser = jwtDecode(action.token);
    const { name, email, userId } = loggedUser.data;
    return {
      ...initialState,
      name,
      email,
      userId,
      token: action.token,
    };
  }
  case 'SIGNOUT':
    return {
      name: null,
      email: null,
      userId: null,
      token: null,
    };
  default:
    return state;
  }
};

export default userReducer;
