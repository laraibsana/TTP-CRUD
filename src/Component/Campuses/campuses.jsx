import "./campusesDisplay.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCampusData } from "../../Actions/campusAction";
import { useHistory } from "react-router-dom";
import axios from "axios";
//
import { deleteCampusDataAction } from "../../Actions/campusAction";
import { store } from "../../index";

const Campuses = () => {
	const campusInfo = useSelector((state) => state.campusReducer.campuses);
	const dispatch = useDispatch();
	let history = useHistory();
	useEffect(() => {
		dispatch(getCampusData());
	}, []);

	const handleDeleteInfo = async (event) => {
		axios.delete(`http://localhost:5000/school/campus/${event.target.name}`);
		dispatch(deleteCampusDataAction(event.target.name));
	};

	const sendUserToForm = (event) => {
		history.push(`/campus/campusform/${event.target.name}`);
	};

	const test = () => {
		console.log(store.getState());
	};

	return (
		<div className="campus-Container">
			{campusInfo.map((campus, index) => {
				return (
					<div className="campus-indivdiuals" key={index}>
						<h1>{campus.campusname}</h1>
						<button name={campus.campus_id} onClick={sendUserToForm}>
							edit
						</button>
						<button name={campus.campus_id} onClick={handleDeleteInfo}>
							delete
						</button>
						<button onClick={test}>test</button>
					</div>
				);
			})}
		</div>
	);
};

export default Campuses;
