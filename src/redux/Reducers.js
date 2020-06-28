/**
 * author: Denis Kravchenko
 */
import authReducer from "./auth/authReducer";
import CartReducer from "./cart/CartReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import InventoryReducer from "./inventory/InventoryReducer";

const Reducers = combineReducers({
  authentication: authReducer,
  cart: CartReducer,
  firestore: firestoreReducer,
  inventory: InventoryReducer,
  firebase: firebaseReducer,
});

export default Reducers;
