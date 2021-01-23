import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import Campuses from "../Campuses/campuses";
import CampusForm from "../CampusForm/CampusForm";
import StudentForm from "../StudentForm/StudentForm";
import Students from "../Students/Students";

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<Route exact path="/campuses">
				<Campuses />
			</Route>
			<Route exact path="/campus/campusform/:id">
				<CampusForm />
			</Route>
			<Route exact path="/students">
				<Students />
			</Route>
			<Route exact path="/student/studentform/:id">
				<StudentForm />
			</Route>
		</Switch>
	);
};

export default Routes;
