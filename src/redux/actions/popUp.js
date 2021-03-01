import { OPEN_POPUP, CLOSE_POPUP } from "../constants/actionTypes";

export const openPopUp = (id) => ({
  type: OPEN_POPUP,
  payload: {
    id,
  },
});

export const closePopUp = (id) => ({
  type: CLOSE_POPUP,
  payload: {
    id,
  },
});
