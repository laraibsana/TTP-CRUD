import React from "react";
//Component
import Nav from "./Component/Nav/nav.jsx";
import Home from "./Component/Home/Home.jsx";
import Campuses from "./Component/Campuses/campuses.jsx";
import Student from "./Component/Students/students.jsx";

const App = () => {
	return (
		<div>
			<Nav />
			{/* <Home /> */}
			{/* <Campuses /> */}
			<Student/>
		</div>
	);
};

export default App;
