/**
 * author: Denis Kravchenko
 */
import {
  CANOE_REQUEST,
  KAYAK_REQUEST,
  PADDLEBOARD_REQUEST,
  HIDE_CANOE,
  HIDE_KAYAK,
  HIDE_PADDLEBOARD_REQUEST,
  EMPTY,
} from "./InventoryTypes";

import { canoe } from "../../Inventory/Canoe";
import { kayak } from "../../Inventory/Kayak";
import { paddleBoard } from "../../Inventory/PaddleBoard";

const initialState = {
  note: "Nothing is selected",
};

const InventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CANOE_REQUEST:
      return { ...state, note: null, canoe };
    case HIDE_CANOE:
      return { ...state, canoe: null };

    case KAYAK_REQUEST:
      return { ...state, note: null, kayak };
    case HIDE_KAYAK:
      return { ...state, kayak: null };

    case PADDLEBOARD_REQUEST:
      return { ...state, note: null, paddleBoard };
    case HIDE_PADDLEBOARD_REQUEST:
      return { ...state, paddleBoard: null };

    case EMPTY:
      return { ...state, note: "Nothing is selected" };

    default:
      return state;
  }
};

export default InventoryReducer;
