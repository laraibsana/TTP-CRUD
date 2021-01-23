import React, { useState } from "react";
import axios from "axios";
import { updateCampusDataAction } from "../../Actions/campusAction";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

const CampusForm = (props) => {
	const [campusName, setCampusName] = useState("");
	const [campuslocation, setCampusLocation] = useState("");
	const [campusimageurl, setCampusImageUrl] = useState("");
	const [campusdescription, setCampusDescription] = useState("");
	const dispatch = useDispatch();
	let history = useHistory();
	let { id } = useParams();

	const handleUpdateInfo = () => {
		let newObject = {
			campus_id: parseInt(id),
			campusname: campusName,
			campuslocation: campuslocation,
			campusimageurl: campusimageurl,
			campusdescription: campusdescription,
		};

		axios.put(`http://localhost:5000/school/campus/${id}`, newObject);
		dispatch(updateCampusDataAction(newObject));
		history.push("/campuses");
	};

	const handleChangeCampusName = (event) => {
		setCampusName(event.target.value);
	};

	const handleCampusLocation = (event) => {
		setCampusLocation(event.target.value);
	};
	const handleCampusImageUrl = (event) => {
		setCampusImageUrl(event.target.value);
	};
	const handleCampusDescription = (event) => {
		setCampusDescription(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<div className="pop-up">
			<form onSubmit={handleSubmit}>
				<label>campus name</label>
				<input value={campusName} onChange={handleChangeCampusName}></input>
				<label>campus location</label>
				<input value={campuslocation} onChange={handleCampusLocation}></input>
				<label>campus url</label>
				<input value={campusimageurl} onChange={handleCampusImageUrl}></input>
				<label>campus description</label>
				<input
					value={campusdescription}
					onChange={handleCampusDescription}
				></input>
				<button onClick={handleUpdateInfo}>submit</button>
			</form>
		</div>
	);
};

export default CampusForm;
