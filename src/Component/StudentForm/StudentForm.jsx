import React, { useState } from "react";
import axios from "axios";
import { updateCampusDataAction } from "../../Actions/campusAction";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

const StudentForm = (props) => {
	const [name, setName] = useState("");
	const [campus_id, setCampus_id] = useState("");
	const [gpa, setGpa] = useState("");
	const [studenturl, setStudentUrl] = useState("");
	const dispatch = useDispatch();
	let history = useHistory();
	let { id } = useParams();

	const handleUpdateInfo = () => {
		let newObject = {
			student_id: parseInt(id),
			name: name,
			gpa: gpa,
			studenturl: studenturl,
		};

		axios.put(`http://localhost:5000/school/campus/${id}`, newObject);
		dispatch(updateCampusDataAction(newObject));
		history.push("/students");
	};

	const handleStudentName = (event) => {
		setName(event.target.value);
	};

	const handleStudentGPA = (event) => {
		setGpa(event.target.value);
	};
	const handleStudentUrl = (event) => {
		setStudentUrl(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<div className="pop-up">
			<form onSubmit={handleSubmit}>
				<label>Student name</label>
				<input value={name} onChange={handleStudentName}></input>
				<label>gpa</label>
				<input value={gpa} onChange={handleStudentGPA}></input>
				<label>campus description</label>
				<input value={studenturl} onChange={handleStudentUrl}></input>
				<button onClick={handleUpdateInfo}>submit</button>
			</form>
		</div>
	);
};

export default StudentForm;
