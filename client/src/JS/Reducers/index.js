import { combineReducers } from "redux";
import medecinReducer from "./medecinReducer";
import userReducer from "./userReducer";
import RdvReducer from "./RdvReducer";

const rootReducer = combineReducers({ userReducer , medecinReducer , RdvReducer});

export default rootReducer;
