/**
 * author: Denis Kravchenko
 */
import reducers from "./Reducers";
import { compose, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import config from "../config/firebase";

import { getFirestore, reduxFirestore } from "redux-firestore";
import { getFirebase } from "react-redux-firebase";
import firebase from "firebase/app";

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase, config)
  )
);

export default store;
