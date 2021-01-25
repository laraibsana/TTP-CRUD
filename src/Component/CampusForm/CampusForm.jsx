import React, { useState } from "react";
import axios from "axios";
import {
	updateCampusDataAction,
	createCampusDataAction,
} from "../../Actions/campusAction";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import "./CampusForm.css";
import nextId from "react-id-generator";

const CampusForm = () => {
	const campusInfo = useSelector((state) => state.campusReducer.campuses);
	const dispatch = useDispatch();
	let history = useHistory();
	let { id } = useParams();

	const [campusname, setcampusname] = useState("");
	const [campuslocation, setcampuslocation] = useState("");
	const [campusimageurl, setcampusimageurl] = useState("");
	const [campusdescription, setcampusdescription] = useState("");
	const [campusnameError, setcampusnameError] = useState("");
	const [campuslocationError, setcampuslocationError] = useState("");
	const [campusimageurlError, setcampusimageurlError] = useState("");
	const [campusdescriptionError, setcampusdescriptionError] = useState("");
	const [tempC, setTempC] = useState([]);

	const handleFormInfo = async () => {
		const campusid = nextId(); //generate a unique id everytime this method is called
		console.log(campusid);
		if (history.location.pathname === "/campus/campusCreateForm") {
			let tempCampus = {
				campusid,
				campusname,
				campuslocation,
				campusimageurl,
				campusdescription,
			};
			axios.post("http://localhost:5000/campus", tempCampus); //This will create the new campus and store it into the database
			dispatch(updateCampusDataAction(tempCampus)); //update the current store with this new campus
			//send the new campus to be displayed at campus individual component
			console.log(tempCampus);
			history.push({
				pathname: `/campus/individual`,
				state: { singleCampus: tempCampus },
			});
		}
	};

	const validate = () => {
		let theSame = false;
		for (let i = 0; i < campusInfo.length; i++) {
			if (campusInfo[i].campusname === campusname) {
				theSame = true;
			}
		}

		if (
			!campusname &&
			!campuslocation &&
			!campusimageurl &&
			!campusdescription
		) {
			setcampusnameError("Please provide a campus name");
			setcampuslocationError("Please provide a campus location");
			setcampusimageurlError("Please provide a campus image url");
			setcampusdescriptionError("Please provide a campus description");
			return false;
		} else if (!campusname && !campuslocation && !campusimageurl) {
			setcampusnameError("Please provide a campus name");
			setcampuslocationError("Please provide a campus location");
			setcampusimageurlError("Please provide a campus image url");
			setcampusdescriptionError("");
			return false;
		} else if (!campusname && !campuslocation && !campusdescription) {
			setcampusnameError("Please provide a campus name");
			setcampuslocationError("Please provide a campus location");
			setcampusdescriptionError("Please provide a campus description");
			setcampusimageurlError("");
			return false;
		} else if (!campusname && !campusimageurl && !campusdescription) {
			setcampusnameError("Please provide a campus name");
			setcampusdescriptionError("Please provide a campus description");
			setcampusimageurlError("Please provide a campus image url");
			setcampuslocationError("");
			return false;
		} else if (
			!campuslocation &&
			!campusimageurl &&
			!campusdescription &&
			theSame
		) {
			setcampusnameError(`There is already a college name ${campusname}`);
			setcampusdescriptionError("Please provide a campus description");
			setcampusimageurlError("Please provide a campus image url");
			setcampuslocationError("Please provide a campus location");
			return false;
		} else if (!campuslocation && !campusimageurl && theSame) {
			setcampusnameError(`There is already a college name ${campusname}`);
			setcampuslocationError("Please provide a campus location");
			setcampusimageurlError("Please provide a campus image url");
			setcampusdescriptionError("");
			return false;
		} else if (!campuslocation && !campusimageurl) {
			setcampuslocationError("Please provide a campus location");
			setcampusimageurlError("Please provide a campus image url");
			setcampusnameError("");
			setcampusdescriptionError("");
			return false;
		} else if (!campusdescription && !campusimageurl && theSame) {
			setcampusnameError(`There is already a college name ${campusname}`);
			setcampusdescriptionError("Please provide a campus description");
			setcampusimageurlError("Please provide a campus image url");
			setcampuslocationError("");
		} else if (!campusdescription && !campusimageurl) {
			setcampusdescriptionError("Please provide a campus description");
			setcampusimageurlError("Please provide a campus image url");
			setcampusnameError("");
			setcampusimageurlError("");
			return false;
		} else if (!campuslocation && !campusdescription && theSame) {
			setcampusnameError(`There is already a college name ${campusname}`);
			setcampusdescriptionError("Please provide a campus description");
			setcampuslocationError("Please provide a campus location");
			setcampusnameError("");
			return false;
		} else if (!campuslocation && !campusdescription) {
			setcampusdescriptionError("Please provide a campus description");
			setcampuslocationError("Please provide a campus location");
			setcampuslocationError("");
			setcampusimageurlError("");
			return false;
		} else if (!campusname && !campusdescription) {
			setcampusdescriptionError("Please provide a campus description");
			setcampusnameError("Please provide a campus name");
			setcampuslocationError("");
			setcampusimageurlError("");
			return false;
		} else if (!campuslocation && !campusname) {
			setcampusnameError("Please provide a campus name");
			setcampuslocationError("Please provide a campus location");
			setcampusimageurlError("");
			setcampusdescriptionError("");
			return false;
		} else if (!campuslocation && theSame) {
			setcampusnameError(`There is already a college name ${campusname}`);
			setcampuslocationError("Please provide a campus location");
			setcampusimageurlError("");
			setcampusdescriptionError("");
			return false;
		} else if (!campuslocation) {
			setcampuslocationError("Please provide a campus location");
			setcampusnameError("");
			setcampusimageurlError("");
			setcampusdescriptionError("");
			return false;
		} else if (!campusdescription && theSame) {
			setcampusnameError(`There is already a college name ${campusname}`);
			setcampusdescriptionError("Please provide a campus description");
			setcampuslocationError("");
			setcampusimageurlError("");
			return false;
		} else if (!campusdescription) {
			setcampusdescriptionError("Please provide a campus description");
			setcampusnameError("");
			setcampuslocationError("");
			setcampusimageurlError("");
			return false;
		} else if (!campusimageurl && theSame) {
			setcampusnameError(`There is already a college name ${campusname}`);
			setcampusimageurlError("Please provide a campus image url");
			setcampuslocationError("");
			setcampusdescriptionError("");
			return false;
		} else if (!campusimageurl) {
			setcampusimageurlError("Please provide a campus image url");
			setcampusnameError("");
			setcampuslocationError("");
			setcampusdescriptionError("");
			return false;
		} else if (!campusname) {
			setcampusnameError("Please provide a campus name");
			setcampuslocationError("");
			setcampusimageurlError("");
			setcampusdescriptionError("");
			return false;
		} else if (theSame) {
			setcampusnameError(`There is already a college name ${campusname}`);
			return false;
		} else {
			setcampusnameError("");
			setcampuslocationError("");
			setcampusimageurlError("");
			setcampusdescriptionError("");
			return true;
		}
	};

	const handleChange = (event) => {
		let { name } = event.target;
		let { value } = event.target;

		switch (name) {
			case "campusname":
				setcampusname(value);
				break;
			case "campuslocation":
				setcampuslocation(value);
				break;
			case "campusdescription":
				setcampusdescription(value);
				break;
			case "campusimageurl":
				setcampusimageurl(value);
			default:
				break;
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const isValid = validate();
		if (isValid) {
			handleFormInfo();
			setcampusname("");
			setcampuslocation("");
			setcampusimageurl("");
			setcampusdescription("");
			setcampusnameError("");
			setcampuslocationError("");
			setcampusimageurlError("");
			setcampusdescriptionError("");
		} else {
			validate();
		}
	};

	return (
		<div className="formContainer">
			<div className="formContainerLeft"></div>
			<div className="formContainerMiddle">
				<form onSubmit={handleSubmit}>
					<div className="pop-up">
						<div className="campusnamelabel">
							<label>campus name</label>
						</div>

						<div className="campusnameinput">
							<input
								name="campusname"
								value={campusname}
								onChange={handleChange}
							></input>
						</div>

						<div>{campusnameError}</div>

						<div className="campuslocationlabel">
							<label>campus location</label>
						</div>

						<div className="campuslocationinput">
							<input
								name="campuslocation"
								value={campuslocation}
								onChange={handleChange}
							></input>
						</div>
						<div>{campuslocationError}</div>
						<div className="campusurllabel">
							<label>campus url</label>
						</div>

						<div className="campusnurlinput">
							<input
								name="campusimageurl"
								value={campusimageurl}
								onChange={handleChange}
							></input>
						</div>

						<div>{campusimageurlError}</div>

						<div className="campusdescriptionlabel">
							<label>campus description</label>
						</div>
						<div className="campusdescriptioninput">
							<input
								name="campusdescription"
								value={campusdescription}
								onChange={handleChange}
							></input>
						</div>

						<div>{campusdescriptionError}</div>

						<div className="campussumbit">
							<button>submit</button>
						</div>
					</div>
				</form>
			</div>
			<div className="formContainerRight"></div>
		</div>
	);
};

export default CampusForm;
