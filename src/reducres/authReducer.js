import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR } from "../constants/authConstant";

const initialState = {
  data: {},
  loggingIn: false,
  loggedIn: false,
  error: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        loggingIn: true,
        loggedIn: false,
        error: false,
      };

    case LOGIN_SUCCESS:
      return {
        loggingIn: false,
        loggedIn: true,
        error: false,
        data: action.payload.success,
      };
    case LOGIN_ERROR:
      return {
        loggingIn: false,
        loggedIn: false,
        error: true,
      };

    default:
      return state;
  }
}
