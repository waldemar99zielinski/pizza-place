import { ADD_PIZZA_ORDER } from "../constants/actionTypes";

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
