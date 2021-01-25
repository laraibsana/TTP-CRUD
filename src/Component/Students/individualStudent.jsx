import React from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { deletStudentDataAction } from "../../Actions/studentAction";
import "./individualStudent.css";

const IndividualStudent = () => {
	let history = useHistory();
	const dispatch = useDispatch();
	const campuses = useSelector((state) => state.campusReducer.campuses);

	console.log(history.location.state[0]);

	const handleDeleteInfo = async (event) => {
		axios.delete(`http://localhost:5000/school/${event.target.name}`);
		dispatch(deletStudentDataAction(event.target.name));
	};

	const sendUserToEditForm = (event) => {
		history.push(`/student/studentEditForm/${event.target.name}`);
	};

	const sendUserToIndividualPage = (event) => {
		const result = campuses.filter(
			(campus) => event.target.name == campus.campus_id
		);

		history.push({
			pathname: `/campus/individual`,
			state: { singleCampus: result },
		});
	};

	return (
		<div className="individualStudent-Container">
			<div className="individualStudent-Container-left"></div>

			<div className="individualStudent-Container-middle">
				<div className="individualStudent">
					{history.location.state[0].map((element, index) => {
						return (
							<div className="individualtheStudent" key={index}>
								<h1>{element.name}</h1>
								<h2>{element.gpa}</h2>
								<h2>{element.studenturl}</h2>
								<button name={element.student_id} onClick={sendUserToEditForm}>
									Edit
								</button>
								<button name={element.student_id} onClick={handleDeleteInfo}>
									Delete
								</button>
							</div>
						);
					})}
				</div>

				<div className="individualCampus">
					{campuses
						.filter((campus) => {
							return (
								campus.campus_id ==
								history.location.state.singleStudent[0].campus_id
							);
						})
						.map((campus, index) => {
							return (
								<div className="indidivualthecampus" key={index}>
									<h1>{campus.campusname}</h1>
									<h2>{campus.campuslocation}</h2>
									<h2>{campus.campusimageurl}</h2>
									<h2>{campus.campusdescription}</h2>
									<h2>{campus.total}</h2>
									<button
										name={campus.campus_id}
										onClick={sendUserToIndividualPage}
									>
										View
									</button>
								</div>
							);
						})}
				</div>
			</div>
			<div className="individualStudent-Container-right"></div>
		</div>
	);
};

export default IndividualStudent;
