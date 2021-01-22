import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import axios from "axios";
import { composeWithDevTools } from "redux-devtools-extension";
import loggingMiddleware from "redux-logger";
import thunkMiddleware from "redux-thunk";

import allReducers from "./Reducers/index";

const store = createStore(
	allReducers,
	composeWithDevTools(
		applyMiddleware(
			thunkMiddleware.withExtraArgument({ axios }),
			loggingMiddleware
		)
	)
);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<App />
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
