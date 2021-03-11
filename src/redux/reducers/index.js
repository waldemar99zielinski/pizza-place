import { combineReducers } from "redux";
import orderManagement from "./orderManagement";
import popUp from "./popUp";

export default combineReducers({ orderManagement, popUp });
