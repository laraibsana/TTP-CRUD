import campusReducer from "./campus";
import { combineReducers } from "redux";

const allReducers = combineReducers({
	campusReducer,
});

export default allReducers;
