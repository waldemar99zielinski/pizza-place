import { combineReducers } from "redux";
import order from "./order";
import orderInfo from "./orderInfo";
import popUp from "./popUp";
import pizza from "./pizza";
import extraTopping from "./extraTopping";
import notification from "./notification";

export default combineReducers({
  order,
  orderInfo,
  popUp,
  pizza,
  extraTopping,
  notification,
});
