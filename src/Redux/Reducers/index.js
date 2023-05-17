import { combineReducers } from "redux";
import { cartReducers,AddtoCartReducer } from "./cartReducers";
import SearchData from "./SearchData"

export default combineReducers({
    cartReducers,
    AddtoCartReducer,
    SearchData
})