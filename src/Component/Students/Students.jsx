import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
	getStudentData,
	deletStudentDataAction,
} from "../../Actions/studentAction";

const Students = () => {
	const studentInfo = useSelector((state) => state.studentReducer.students);
	const dispatch = useDispatch();
	let history = useHistory();
	useEffect(() => {
		dispatch(getStudentData());
	}, []);

	const handleDeleteInfo = async (event) => {
		axios.delete(`http://localhost:5000/school/${event.target.name}`);
		dispatch(deletStudentDataAction(event.target.name));
	};

	const sendUserToForm = (event) => {
		history.push(`/student/studentform/${event.target.name}`);
	};

	return (
		<div className="student-container">
			{studentInfo.map((student) => {
				return (
					<div>
						<h1>{student.name}</h1>
						<button name={student.student_id} onClick={sendUserToForm}>
							edit
						</button>
						<button name={student.student_id} onClick={handleDeleteInfo}>
							delete
						</button>
						<button>test</button>
					</div>
				);
			})}
		</div>
	);
};

export default Students;
