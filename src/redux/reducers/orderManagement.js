import { ADD_ORDER_ELEMENT } from "../constants/actionTypes";

const initialCartState = { allIds: [] };

const reducer = (state = initialCartState, action) => {
  switch (action.type) {
    case ADD_ORDER_ELEMENT:
      return {
        ...state,
        allIds: [...state.allIds, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
