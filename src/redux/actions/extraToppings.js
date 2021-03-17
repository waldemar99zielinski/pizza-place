import axios from "axios";
import {
  REQUEST_EXTRATOPPINGS,
  RECEIVE_EXTRATOPPINGS,
  RECEIVE_EXTRATOPPINGS_ERROR,
} from "../constants/actionTypes";
import { extraToppingsGetAllURL } from "../constants/url";

export const requestExtraToppings = () => ({
  type: REQUEST_EXTRATOPPINGS,
});

export const receiveExtraToppings = (json) => ({
  type: RECEIVE_EXTRATOPPINGS,
  payload: {
    data: json,
  },
});

export const receiveExtraToppingsError = (json) => ({
  type: RECEIVE_EXTRATOPPINGS_ERROR,
  payload: {
    data: json,
  },
});

export const fetchExtraToppings = (url) => (dispatch) => {
  dispatch(requestExtraToppings);
  return axios({
    url: extraToppingsGetAllURL,
    timeout: 20000,
    method: "GET",
    responseType: "json",
  })
    .then((response) => {
      dispatch(receiveExtraToppings(response.data));
      console.log(response);
    })
    .catch((response) => {
      dispatch(receiveExtraToppingsError(response.data));
      console.log("ERROR axios: ", response);
    });
};
