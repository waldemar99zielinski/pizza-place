import { ADD_PIZZA_ORDER, REMOVE_PIZZA_ORDER } from "../constants/actionTypes";

const initialState = { orderedPizzas: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA_ORDER:
      return {
        ...state,
        orderedPizzas: [...state.orderedPizzas, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
