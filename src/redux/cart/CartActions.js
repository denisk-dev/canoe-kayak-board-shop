/**
 * author: Denis Kravchenko
 */
import { FETCH_CART_REQUEST, FETCH_CART_ERROR } from "./CartTypes";

export const addItem = (item) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    const profile = getState().firebase.profile;
    const authId = getState().firebase.auth.uid;
    const profileItems = getState().firebase.profile.items;
    console.log(authId);
    console.log("exec");
    console.log(profile);
    console.log(getState());

    firestore
      .collection("carts")
      .add({
        ...item,
        authId,
        // authorName:
      })
      .then((res) => {
        dispatch({ type: FETCH_CART_REQUEST, item });
        console.log(res);
      })
      .catch(() => {
        dispatch({ type: FETCH_CART_ERROR });
      });
  };
};

export const deleteItem = (item) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authId = getState().firebase.auth.uid;

    firestore
      .collection("carts")
      .doc(item.id)
      .delete()
      .then(() => dispatch({ type: FETCH_CART_REQUEST }))
      .catch((err) => dispatch({ type: FETCH_CART_ERROR }));
  };
};
