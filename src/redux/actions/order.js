import {
  ADD_PIZZA_ORDER,
  REMOVE_PIZZA_ORDER,
  INCRESE_NUMBER_OF_PIZZA_IN_ORDER,
  DECREASE_NUMBER_OF_PIZZA_IN_ORDER,
} from "../constants/actionTypes";

export const addPizzaOrder = (
  pizza_code,
  extra_topping_code,
  size,
  numberOf
) => ({
  type: ADD_PIZZA_ORDER,
  payload: {
    pizza_code,
    extra_topping_code,
    size,
    numberOf,
  },
});
export const removePizzaOrder = (pizza_code) => ({
  type: REMOVE_PIZZA_ORDER,
  payload: {
    pizza_code,
  },
});

export const increaseNumberOfPizzaInOrder = (pizza_code, increaseNumber) => ({
  type: INCRESE_NUMBER_OF_PIZZA_IN_ORDER,
  payload: {
    pizza_code,
    increaseNumber,
  },
});

export const decreaseNumberOfPizzaInOrder = (pizza_code, decreaseNumber) => ({
  type: DECREASE_NUMBER_OF_PIZZA_IN_ORDER,
  payload: {
    pizza_code,
    decreaseNumber,
  },
});
