import "./campusesDisplay.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCampusDataAction } from "../../Actions/campusAction";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Campuses = () => {
	const campusInfo = useSelector((state) => state.campusReducer.campuses);
	const dispatch = useDispatch();
	let history = useHistory();

	const handleDeleteInfo = async (event) => {
		axios.delete(`http://localhost:5000/school/campus/${event.target.name}`);
		dispatch(deleteCampusDataAction(event.target.name));
	};

	const sendUserToCreateForm = () => {
		history.push(`/campus/campusCreateForm`);
	};

	const sendUserToIndividualPage = (campus_id) => {
		const result = campusInfo.filter((campus) => campus_id == campus.campus_id);
		history.push({
			pathname: `/campus/individual`,
			state: { singleCampus: result },
		});
	};

	return (
		<div className="campus-Container">
			<div className="container-left"></div>

			{campusInfo.length === 0 ? (
				<div className="emptyPage">
					<h1>There are currently no campuses in the database</h1>
					<button onClick={sendUserToCreateForm}>Add Campus</button>
				</div>
			) : (
				<div className="container-middle">
					<div className="campus-header">
						<h1>Campuses</h1>
					</div>
					<div className="campus-card">
						{campusInfo.map((campus, index) => {
							return (
								<div className="campus-indivdiuals" key={index}>
									<img className="campusImage" src={campus.campusimageurl} />
									<div className="campusName">
										<h1
											onClick={() => sendUserToIndividualPage(campus.campus_id)}
										>
											{campus.campusname}
										</h1>
									</div>
									<div className="campusLocation">
										<p>Located At: {campus.campuslocation}</p>
									</div>

									<div className="campusTotal">
										<h4>Number Of students Enrolled: {campus.total}</h4>
									</div>
									<div className="campusDelete">
										<button
											className="btn-campus-delete"
											name={campus.campus_id}
											onClick={handleDeleteInfo}
										>
											delete
										</button>
									</div>
								</div>
							);
						})}

						<div className="Empty-card">
							<button
								className="btn-campus-Add btn-campus"
								onClick={sendUserToCreateForm}
							>
								Add Campus
							</button>
						</div>
					</div>
				</div>
			)}

			<div className="container-right"></div>
		</div>
	);
};

export default Campuses;
