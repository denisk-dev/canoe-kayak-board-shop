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

export const getCanoe = () => {
  return { type: CANOE_REQUEST };
};

export const hideCanoe = () => {
  return { type: HIDE_CANOE };
};

export const getKayak = () => {
  return { type: KAYAK_REQUEST };
};

export const hideKayak = () => {
  return { type: HIDE_KAYAK };
};

export const getPaddleBoard = () => {
  return { type: PADDLEBOARD_REQUEST };
};

export const hidePaddleBoard = () => {
  return { type: HIDE_PADDLEBOARD_REQUEST };
};

export const isEmpty = () => {
  return { type: EMPTY };
};
