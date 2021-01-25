import React from "react";
import { getCampusData } from "./Actions/campusAction";
import { getStudentData } from "./Actions/studentAction";
import { getNoCampusStudentData } from "./Actions/nocampusaction";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
//Component
import Nav from "./Component/Nav/nav.jsx";
import Routes from "./Component/Routes/routes.jsx";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCampusData());
		dispatch(getStudentData());
		dispatch(getNoCampusStudentData());
	}, []);

	return (
		<div className="Container">
			<div className="Container-Top">
				<Nav />
			</div>
			<div className="Container-Middle">
				<Routes />
			</div>
			<div className="Container-Bottom">
				{/* <footer>Created By: </footer> */}
			</div>
		</div>
	);
};

export default App;
