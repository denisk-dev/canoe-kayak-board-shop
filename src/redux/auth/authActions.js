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
import { getFirestore } from "redux-firestore";

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => dispatch({ type: USER_SIGNOUT_SUCCESS }));
  };
};

export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: USER_SIGNIN_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: USER_SIGNIN_ERROR, err });
      });
  };
};

export const signUp = (account) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(account.email, account.password)
      .then((res) => {
        console.log(res);
        return firestore
          .collection("carts")
          .doc(res.user.uid)
          .set({ accountName: account.name });
      })
      .then(() => {
        dispatch({ type: USER_SIGNUP_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: USER_SIGNUP_ERROR });
      });
  };
};
