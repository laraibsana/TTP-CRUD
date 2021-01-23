import React, { Route, Switch } from "react";
//Component
import Nav from "./Component/Nav/nav.jsx";
import Home from "./Component/Home/Home.jsx";
import Campuses from "./Component/Campuses/campuses.jsx";
import Routes from "./Component/Routes/routes.jsx";

const App = () => {
	return (
		<div>
			<Nav />
			<Routes />
		</div>
	);
};

export default App;
