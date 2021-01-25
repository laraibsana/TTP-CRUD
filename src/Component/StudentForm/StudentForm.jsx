import React, { useState } from "react";
import axios from "axios";
import {
	updatStudentDataAction,
	creatStudentDataAction,
} from "../../Actions/studentAction";
import { createNoCampusStudentDataAction } from "../../Actions/nocampusaction";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import "./StudentForm.css";

const StudentForm = () => {
	const [name, setName] = useState("");
	const [campusname, setCampusName] = useState("");
	const [gpa, setGpa] = useState("");
	const [studenturl, setStudentUrl] = useState("");
	const [campusnameError, setcampusnameError] = useState("");
	const [nameError, setnameError] = useState("");
	const [gpaError, setgpaError] = useState("");
	const [studenturlError, setstudenturlError] = useState("");
	const [tempC, setTempC] = useState([]);
	const dispatch = useDispatch();
	const campusInfo = useSelector((state) => state.campusReducer.campuses);
	let history = useHistory();
	let { id } = useParams();

	const handleFormInfo = () => {
		if (history.location.pathname === "/student/studentCreateForm") {
			let newObject = {
				name: name,
				campusname: campusname,
				gpa: gpa,
				studenturl: studenturl,
			};
			if (campusname === null || gpa === null) {
				dispatch(createNoCampusStudentDataAction(newObject));
			}

			axios
				.post("http://localhost:5000/student", newObject)
				.then((response) => {
					dispatch(creatStudentDataAction(response.data.rows[0]));

					history.push({
						pathname: `/student/individual`,
						state: { singleCampus: [response.data.rows] },
					});
				});
		} else {
			let newObject = {
				student_id: parseInt(id),
				name: name,
				campusname: campusname,
				gpa: gpa,
				studenturl: studenturl,
			};

			axios
				.put(`http://localhost:5000/school/${id}`, newObject)
				.then((response) => {
					dispatch(updatStudentDataAction(response.data.rows[0]));
				});

			history.push("/students");
		}
	};

	const validate = () => {
		let isNumber = false;
		let theNumber = 0;
		let campusExist = false;

		if (gpa != null || gpa != "") {
			if (!isNaN(gpa)) {
				isNumber = true;
				theNumber = parseInt(gpa);
			}
		}

		console.log(isNumber);

		if (campusname != null || campusname != "") {
			for (let i = 0; i < campusInfo.length; i++) {
				if (campusInfo[i].campusname === campusname) {
					campusExist = true;
				}
			}
		}

		if (!name && !studenturl && theNumber >= 0 && theNumber <= 4.0) {
			setnameError("Please provide a name");
			setstudenturlError("Please provide a student image url");
			setgpaError("Please provide a gpa that is between 0.0 and 4.0");
			setcampusnameError("");
			return false;
		} else if (
			!name &&
			!studenturl &&
			campusExist == false &&
			theNumber >= 0 &&
			theNumber <= 4.0
		) {
			setnameError("Please provide a name");
			setstudenturlError("Please provide a student image url");
			setgpaError("Please provide a gpa that is between 0.0 and 4.0");
			setcampusnameError("");
			return false;
		} else if (
			!name &&
			!studenturl &&
			theNumber >= 0 &&
			theNumber <= 4.0 &&
			campusExist == false
		) {
			setnameError("Please provide a name");
			setstudenturlError("Please provide a student image url");
			setgpaError("Please provide a gpa that is between 0.0 and 4.0");
			setcampusnameError("");
			return false;
		} else if (!studenturl && theNumber >= 0 && theNumber <= 4.0) {
			setnameError("");
			setstudenturlError("Please provide a student image url");
			setgpaError("Please provide a gpa that is between 0.0 and 4.0");
			setcampusnameError("");
			return false;
		} else if (!name && !studenturl) {
			setnameError("Please provide a name");
			setstudenturlError("Please provide a student image url");
			setgpaError("");
			setcampusnameError("");
			return false;
		} else if (!name) {
			setnameError("Please provide a name");
			setstudenturlError("");
			setgpaError("");
			setcampusnameError("");
			return false;
		} else if (!studenturl) {
			setnameError("");
			setstudenturlError("Please provide a student image url");
			setgpaError("");
			setcampusnameError("");
			return false;
		} else {
			setnameError("");
			setstudenturlError("");
			setgpaError("");
			setcampusnameError("");
			return true;
		}
	};

	const handleChange = (event) => {
		let { name } = event.target;
		let { value } = event.target;

		switch (name) {
			case "name":
				setName(value);
				break;
			case "campusname":
				setCampusName(value);
				break;
			case "gpa":
				setGpa(value);
				break;
			case "studenturl":
				setStudentUrl(value);
			default:
				break;
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		let isValid = validate();
		if (isValid) {
			setName("");
			setCampusName("");
			setGpa("");
			setStudentUrl("");
			handleFormInfo();
		} else {
			validate();
		}
	};

	return (
		<div class="formContainer">
			<div className="formContainerLeft"></div>
			<div className="formContainerMiddle">
				<form onSubmit={handleSubmit}>
					<div className="pop-up">
						<div className="studentnamelabel">
							<label>Student name</label>
						</div>
						<div className="studentnameinput">
							<input value={name} name="name" onChange={handleChange}></input>
						</div>
						<div>{nameError}</div>
						<div className="studentcampusnamelabel">
							<label>Campus name</label>
						</div>
						<div className="studentcampusnameinput">
							<input
								type="text"
								value={campusname}
								name="campusname"
								onChange={handleChange}
							></input>
						</div>
						<div>{campusnameError}</div>
						<div className="studentgpalabel">
							<label>gpa</label>
						</div>
						<div className="studentgpainput">
							<input name="gpa" value={gpa} onChange={handleChange}></input>
						</div>
						<div>{gpaError}</div>
						<div className="studenturllabel">
							<label>Student Url</label>
						</div>
						<div className="studenturlinput">
							<input
								name="studenturl"
								value={studenturl}
								onChange={handleChange}
							></input>
						</div>
						<div>{studenturlError}</div>
						<div className="studentsubmit">
							<button>submit</button>
						</div>
					</div>
				</form>
			</div>
			<div className="formContainerRight"></div>
		</div>
	);
};

export default StudentForm;
