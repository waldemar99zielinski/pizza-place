import { ADD_ORDER_ELEMENT } from "./constants/actionTypes";

export const addOrderElement = (element) => ({
  type: ADD_ORDER_ELEMENT,
  payload: {
    element,
  },
});
