import {
  OPEN_NOTIFICATION,
  CLOSE_NOTIFICATION,
} from "../constants/actionTypes";

export const openNotification = (message) => ({
  type: OPEN_NOTIFICATION,
  payload: {
    message,
  },
});

export const closeNotification = (id) => ({
  type: CLOSE_NOTIFICATION,
  payload: {
    id,
  },
});
