import {
  ADD_PIZZA_ORDER,
  REMOVE_PIZZA_ORDER,
  INCRESE_NUMBER_OF_PIZZA_IN_ORDER,
  DECREASE_NUMBER_OF_PIZZA_IN_ORDER,
} from "../constants/actionTypes";

const initialState = { orderedPizzas: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA_ORDER:
      let isIdExisting =
        state.orderedPizzas
          .map((o) => o.pizza_code)
          .indexOf(action.payload.pizza_code) > -1;
      console.log(
        "Reducer: order: ",
        action.payload.pizza_code,
        ", isIdexisting: ",
        isIdExisting
      );
      if (isIdExisting) {
        return state;
      } else {
        return {
          ...state,
          orderedPizzas: [...state.orderedPizzas, action.payload],
        };
      }
    case REMOVE_PIZZA_ORDER:
      return {
        ...state,
        orderedPizzas: state.orderedPizzas.filter(
          (o) => o.pizza_code !== action.payload.pizza_code
        ),
      };
    case INCRESE_NUMBER_OF_PIZZA_IN_ORDER:
      return {
        ...state,
        orderedPizzas: state.orderedPizzas.map((o) =>
          o.pizza_code === action.payload.pizza_code
            ? { ...o, numberOf: o.numberOf + action.payload.increaseNumber }
            : o
        ),
      };
    case DECREASE_NUMBER_OF_PIZZA_IN_ORDER:
      return {
        ...state,
        orderedPizzas: state.orderedPizzas.map((o) =>
          o.pizza_code === action.payload.pizza_code
            ? { ...o, numberOf: o.numberOf - action.payload.decreaseNumber }
            : o
        ),
      };
    default:
      return state;
  }
};

export default reducer;
