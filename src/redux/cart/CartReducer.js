/**
 * author: Denis Kravchenko
 */
import { FETCH_CART_REQUEST, FETCH_CART_ERROR } from "./CartTypes";

const initialState = {};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CART_REQUEST:
      console.log(" added to cart success");
      console.log(state);
      return state;
    case FETCH_CART_ERROR:
      console.log("not added to card error");
      return state;
    default:
      return state;
  }
};

export default cartReducer;
