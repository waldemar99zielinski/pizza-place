import {
  REQUEST_EXTRATOPPINGS,
  RECEIVE_EXTRATOPPINGS,
  RECEIVE_EXTRATOPPINGS_ERROR,
} from "../constants/actionTypes";

const initialState = { isLoading: false, data: [], error: false };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_EXTRATOPPINGS:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case RECEIVE_EXTRATOPPINGS:
      return {
        ...state,
        isLoading: false,
        error: false,
        data: action.payload.data,
      };
    case RECEIVE_EXTRATOPPINGS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
