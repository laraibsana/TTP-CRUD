import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { deletStudentDataAction } from "../../Actions/studentAction";
import "./Studdents.css";

const Students = () => {
	const studentInfo = useSelector((state) => state.studentReducer.students);
	const dispatch = useDispatch();
	let history = useHistory();

	const handleDeleteInfo = async (event) => {
		axios.delete(`http://localhost:5000/school/${event.target.name}`);
		dispatch(deletStudentDataAction(event.target.name));
	};

	const sendUserToCreateForm = () => {
		history.push(`/student/studentCreateForm`);
	};

	const sendUserToIndividualPage = (student_id) => {
		const result = studentInfo.filter(
			(student) => student_id == student.student_id
		);

		history.push({
			pathname: `/student/individual`,
			state: { singleStudent: result },
		});
	};

	return (
		<div className="student-container">
			<div className="student-container-left"></div>
			<div className="student-container-middle">
				<div className="student-header">
					<h1>Students</h1>
				</div>
				<div className="student-card">
					{studentInfo.map((student, index) => {
						return (
							<div className="student-indivdiuals" key={index}>
								<div className="studentImage">
									<img src={student.studenturl} />
								</div>

								<div className="studentName">
									<h1
										onClick={() => sendUserToIndividualPage(student.student_id)}
									>
										{student.name}
									</h1>
								</div>

								<div className="studentDelete">
									<button
										className="btn-student-delete"
										name={student.student_id}
										onClick={handleDeleteInfo}
									>
										delete
									</button>
								</div>
							</div>
						);
					})}
					<div className="Empty-card">
						<button className="btn-student-Add" onClick={sendUserToCreateForm}>
							Add Student
						</button>
					</div>
				</div>
			</div>
			<div className="student-container-right"></div>
		</div>
	);
};

export default Students;
