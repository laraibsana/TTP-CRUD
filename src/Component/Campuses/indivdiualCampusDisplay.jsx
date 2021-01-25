import { useHistory } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { deleteCampusDataAction } from "../../Actions/campusAction";
import "./individualCampus.css";
import React, { useState } from "react";

const IndividualCampusDisplay = () => {
	let history = useHistory();
	const dispatch = useDispatch();
	const studentInfo = useSelector((state) => state.studentReducer.students);
	const [studentError, setStudentError] = useState("");

	const handleDeleteInfo = async (event) => {
		axios.delete(`http://localhost:5000/school/campus/${event.target.name}`);
		dispatch(deleteCampusDataAction(event.target.name));
	};

	const sendUserToEditForm = (event) => {
		history.push(`/campus/campusEditForm/${event.target.name}`);
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

	const addStudent = (id) => {
		history.push(`/student/noCampus/${id}`);
	};

	return (
		<div className="IndividualCampus-container">
			<div className="IndividualCampus-container-left"></div>
			<div className="IndividualCampus-container-middle">
				{Object.keys(history.location.state.singleCampus).forEach((key) => {
					return (
						<div className="campus">
							<div className="campusCard-Left">
								<div className="campusImage-container">
									<img src={history.location.state.singleCampus[key]} />
								</div>
							</div>
							<div className="campusCard-Right">
								<div className="campusName-container">
									<h1>{history.location.state.singleCampus[key]}</h1>
								</div>

								<div className="campusDescription-container">
									<p>Description: {history.location.state.singleCampus[key]}</p>
								</div>

								<div className="campusLocation-container">
									<p>Located: {history.location.state.singleCampus[key]}</p>
								</div>

								<div className="campusTotal-container">
									<p>
										Total of Students enrolled:{" "}
										{history.location.state.singleCampus[key]}
									</p>
								</div>
								<div className="campusEdit-container">
									<button
										className="btn-campus-Add"
										name={key.campus_id}
										onClick={sendUserToEditForm}
									>
										edit
									</button>
								</div>
								<div className="campusDelete-container">
									<button
										className="btn-campus-delete"
										name={key.campus_id}
										onClick={handleDeleteInfo}
									>
										Delete
									</button>
								</div>
								<div className="campusAdd-container">
									<button
										className="btn-add-delete"
										onClick={() => addStudent(key.campus_id)}
									>
										Add student
									</button>
								</div>
							</div>
						</div>
					);
				})}

				{/* {studentInfo.length != 0 ? (
					<div className="student-listings">
						{studentInfo
							.filter((student) => {
								return (
									student.campus_id ==
									history.location.state.singleCampus[0].campus_id
								);
							})
							.map((student, index) => {
								return (
									<div className="individual" key={index}>
										<div className="individual-img-container">
											<img src={student.studenturl} />
										</div>

										<div className="individual-name-container">
											<h4
												onClick={() =>
													sendUserToIndividualPage(student.student_id)
												}
											>
												{" "}
												{student.name}
											</h4>
										</div>
										<div className="individual-gpa-container">
											<h4>{student.gpa}</h4>
										</div>

										<div className="individual-campusname-container">
											<h4>
												Current enrolled in
												{history.location.state.singleCampus[0].campusname}
											</h4>
										</div>
									</div>
								);
							})}
					</div>
				) : null} */}
			</div>

			<div className="IndividualCampus-container-right"></div>
		</div>
	);
};

export default IndividualCampusDisplay;
