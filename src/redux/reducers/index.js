import { combineReducers } from "redux";
import order from "./order";
import popUp from "./popUp";
import pizza from "./pizza";
import extraTopping from "./extraTopping";

export default combineReducers({ order, popUp, pizza, extraTopping });
