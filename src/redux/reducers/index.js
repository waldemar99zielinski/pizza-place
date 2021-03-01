import { combineReducers } from "redux";
import orderManagement from "./orderManagement";
import cartPopUp from "./cartPopUp";
import popUp from "./popUp";

export default combineReducers({ orderManagement, cartPopUp, popUp });
