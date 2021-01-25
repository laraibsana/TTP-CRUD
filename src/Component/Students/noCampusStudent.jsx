import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteNoCampusStudentDataAction } from "../../Actions/nocampusaction";
import { updatStudentDataAction } from "../../Actions/studentAction";
import { updateCampusDataAction } from "../../Actions/campusAction";
import axios from "axios";
import "./noCampusStudent.css";

const NoCampusStudent = () => {
	const history = useHistory();
	let { id } = useParams();
	const dispatch = useDispatch();
	const noCampusStudent = useSelector(
		(state) => state.noCampusReducer.nocampusstudents
	);
	const addStudentToCampus = (student_id) => {
		let object = {};

		for (let i = 0; i < noCampusStudent.length; i++) {
			if (noCampusStudent[i].student_id == student_id) {
				object = noCampusStudent[i];
			}
		}

		object = {
			...object,
			campus_id: parseInt(id),
		};
		console.log(object);
		axios
			.put(`http://localhost:5000/school/${object.student_id}`, object)
			.then((response) => {
				console.log("here");
				console.log(response);
				dispatch(updatStudentDataAction(response.data.rows[0]));

				axios
					.get(
						`http://localhost:5000/campus/${response.data.rows[0].campusname}`
					)
					.then((response) => {
						dispatch(updateCampusDataAction(response.data.rows[0]));
					});
			});

		dispatch(deleteNoCampusStudentDataAction(object));
	};

	const handleGoBack = () => {
		history.goBack();
	};

	return (
		<div className="noCampusStudentContainer">
			<div className="noCampuStudentMiddleContainer">
				{noCampusStudent.map((element, index) => {
					return (
						<div className="noCampusStudent" key={index}>
							<h1>{element.name}</h1>
							<h2>{element.gpa}</h2>
							<h2>{element.studenturl}</h2>
							<button onClick={() => addStudentToCampus(element.student_id)}>
								Add Student to Campus
							</button>
						</div>
					);
				})}
				{/* <button onClick={handleGoBack}>Done</button> */}
			</div>
		</div>
	);
};

export default NoCampusStudent;
