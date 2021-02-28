import { TOGGLE_CART } from "../constants/actionTypes";

const initialState = { isCartOpened: false };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART: {
      return {
        ...state,
        isCartOpened: !state.isCartOpened,
      };
    }
    default:
      return state;
  }
};

export default reducer;
