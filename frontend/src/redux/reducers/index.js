import {combineReducers} from "redux";
import AuthReducer from "./AuthReducer";
import ItemReducer from "./ItemReducer";

export default combineReducers({
    Auth:AuthReducer,
    Item:ItemReducer
})