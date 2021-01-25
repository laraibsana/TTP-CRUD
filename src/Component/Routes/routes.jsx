import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import Campuses from "../Campuses/campuses";
import CampusForm from "../CampusForm/CampusForm";
import StudentForm from "../StudentForm/StudentForm";
import Students from "../Students/Students";
import IndividualCampusDisplay from "../Campuses/indivdiualCampusDisplay";
import IndividualStudent from "../Students/individualStudent";
import NoCampusStudent from "../Students/noCampusStudent";

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<Route exact path="/campuses">
				<Campuses />
			</Route>
			<Route exact path="/campus/campusEditform/:id">
				<CampusForm />
			</Route>
			<Route exact path="/campus/individual">
				<IndividualCampusDisplay />
			</Route>
			<Route exact path="/campus/campusCreateForm">
				<CampusForm />
			</Route>
			<Route exact path="/students">
				<Students />
			</Route>
			<Route exact path="/student/individual">
				<IndividualStudent />
			</Route>
			<Route exact path="/student/studentEditForm/:id">
				<StudentForm />
			</Route>
			<Route exact path="/student/studentCreateForm">
				<StudentForm />
			</Route>
			<Route exact path="/student/noCampus/:id">
				<NoCampusStudent />
			</Route>
		</Switch>
	);
};

export default Routes;
