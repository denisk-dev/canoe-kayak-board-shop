/**
 * author: Denis Kravchenko
 */
import {
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_ERROR,
  USER_SIGNOUT_SUCCESS,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_ERROR,
} from "./authTypes";

const initialState = {
  err: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNUP_SUCCESS:
      console.log("Signed up");
      return { ...state, err: null };

    case USER_SIGNUP_ERROR:
      console.log("Error Signing up");
      return { ...state, err: "Error Sign Up" };

    case USER_SIGNIN_SUCCESS:
      console.log("User sign in succes");
      return { ...state };

    case USER_SIGNIN_ERROR:
      console.log("User sing in error");
      return { ...state, err: "Incorrect email or password" };

    case USER_SIGNOUT_SUCCESS:
      console.log("Signed Out");
      return state;

    default:
      return state;
  }
};

export default authReducer;
