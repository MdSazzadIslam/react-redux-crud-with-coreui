import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR } from "../constants/authConstant";
import authService from "../services/authService";

export default function loginUser(email, password) {
  debugger;
  return async (dispatch) => {
    dispatch(logIn());
    try {
      await authService.loginUser(email, password).then(
        (response) => {
          dispatch(logInSuccess(response.data));
        },
        (error) => {
          dispatch(logInError(error.toString()));
        }
      );
    } catch (error) {
      dispatch(logInError(error.toString()));
    }
  };
}

export function logIn() {
  return {
    type: LOGIN,
  };
}

export function logInSuccess(success) {
  return {
    type: LOGIN_SUCCESS,
    payload: { success },
  };
}

export function logInError(error) {
  return {
    type: LOGIN_ERROR,
    payload: { error },
  };
}
