import campusReducer from "./campus";
import studentReducer from "./student";
import { combineReducers } from "redux";

const allReducers = combineReducers({
	campusReducer,
	studentReducer,
});


export default allReducers;
