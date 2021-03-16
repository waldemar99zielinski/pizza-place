import { combineReducers } from "redux";
import order from "./order";
import popUp from "./popUp";
import pizza from "./pizza";

export default combineReducers({ order, popUp, pizza });
