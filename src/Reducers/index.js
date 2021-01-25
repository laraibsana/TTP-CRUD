import campusReducer from "./campus";
import studentReducer from "./student";
import noCampusReducer from "./noCampusStudent";
import { combineReducers } from "redux";

const allReducers = combineReducers({
	campusReducer,
	studentReducer,
	noCampusReducer,
});

export default allReducers;
