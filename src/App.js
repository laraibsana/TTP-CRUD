import React from "react";
//Component
import Nav from "./Component/Nav/nav.jsx";
import Home from "./Component/Home/Home.jsx";
import Campuses from "./Component/Campuses/campuses.jsx";

const App = () => {
	return (
		<div>
			<Nav />
			{/* <Home /> */}
			<Campuses />
		</div>
	);
};

export default App;
