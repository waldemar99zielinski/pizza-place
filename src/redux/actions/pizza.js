import axios from "axios";
import {
  REQUEST_PIZZAS,
  RECEIVE_PIZZAS,
  RECEIVE_PIZZAS_ERROR,
} from "../constants/actionTypes";
import { pizzasGetAllURL } from "../constants/url";

export const requestPizzas = () => ({
  type: REQUEST_PIZZAS,
});

export const receivePizzas = (json) => ({
  type: RECEIVE_PIZZAS,
  payload: {
    data: json,
  },
});

export const receivePizzasError = (json) => ({
  type: RECEIVE_PIZZAS_ERROR,
  payload: {
    data: json,
  },
});

export const fetchPizzas = (url) => (dispatch) => {
  dispatch(requestPizzas);
  return axios({
    url: pizzasGetAllURL,
    timeout: 20000,
    method: "GET",
    responseType: "json",
  })
    .then((response) => {
      dispatch(receivePizzas(response.data));
      console.log(response);
    })
    .catch((response) => {
      dispatch(receivePizzasError(response.data));
      console.log("ERROR axios: ", response);
    });
};
