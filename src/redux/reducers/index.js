import { combineReducers } from "redux";
import orderManagement from "./orderManagement";
import cartPopUp from "./cartPopUp";
export default combineReducers({ orderManagement, cartPopUp });
