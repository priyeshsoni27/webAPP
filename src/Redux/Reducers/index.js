import { combineReducers } from "redux";
import { cartReducers,AddtoCartReducer } from "./cartReducers";

export default combineReducers({
    cartReducers,
    AddtoCartReducer
})