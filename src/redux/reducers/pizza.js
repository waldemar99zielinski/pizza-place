import {
  REQUEST_PIZZAS,
  RECEIVE_PIZZAS,
  RECEIVE_PIZZAS_ERROR,
} from "../constants/actionTypes";

const initialState = { isLoading: false, data: [], error: false };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_PIZZAS:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case RECEIVE_PIZZAS:
      return {
        ...state,
        isLoading: false,
        error: false,
        data: action.payload.data,
      };
    case RECEIVE_PIZZAS_ERROR:
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
