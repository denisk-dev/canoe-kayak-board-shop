import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Provider, useSelector } from "react-redux";
import store from "./redux/store";

import { ReactReduxFirebaseProvider } from "react-redux-firebase";

import firebase from "firebase/app";
import config from "./config/firebase";

import { createFirestoreInstance } from "redux-firestore";

import { isLoaded } from "react-redux-firebase";
import Spinner from "./components/Spinner/Spinner";

const profileSpecificProps = {
  userProfile: "carts",
  useFirestoreForProfile: true,
  enableRedirectHandling: false,
  resetBeforeLogin: false,
};

const rrfProps = {
  firebase,
  config: config,
  config: profileSpecificProps,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

const AuthDone = ({ children }) => {
  const auth = useSelector((state) => state.firebase.auth);

  if (!isLoaded(auth)) {
    return <Spinner />;
  }
  return children;
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthDone>
          <App />
        </AuthDone>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
