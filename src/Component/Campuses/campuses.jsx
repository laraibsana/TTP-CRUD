import React, { Component } from "react";
import { connect } from "react-redux";
import { getCampusData } from "../../Actions/index";
import axios from "axios";

class Campuses extends Component {
	constructor() {
		super();

		this.state = {
			campusName: "",
			campuslocation: "",
			campusimageurl: "",
			campusdescription: "",
		};
	}

	async componentDidMount() {
		console.log("render");
		await this.props.getCampusData();
	}

	handleSubmit = (event) => {
		event.preventDefault();
	};

	handleSendInfo = () => {
		axios
			.post("http://localhost:5000/school/campus", this.state)
			.then(function (response) {
				console.log(response);
			});

		console.log("here");
	};

	handleDeleteInfo = () => {
		axios.delete("http://localhost:5000/school/campus/2");
	};

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleUpdateInfo = () => {
		axios
			.put("http://localhost:5000/school/campus/2", this.state)
			.then(function (response) {
				console.log(response);
			});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>campus name</label>
					<input
						name="campusName"
						value={this.state.campusName}
						onChange={this.handleChange}
					></input>
					<label>campus location</label>
					<input
						name="campuslocation"
						value={this.state.campuslocation}
						onChange={this.handleChange}
					></input>
					<label>campus url</label>
					<input
						name="campusimageurl"
						value={this.state.campusimageurl}
						onChange={this.handleChange}
					></input>
					<label>campus description</label>
					<input
						name="campusdescription"
						value={this.state.campusdescription}
						onChange={this.handleChange}
					></input>
					<button onClick={this.handleUpdateInfo}>submit</button>
				</form>
				<button onClick={this.handleDeleteInfo}>delete</button>
			</div>
		);
	}
}

// campus_id SERIAL PRIMARY KEY,
//     campusName VARCHAR(250),
//     campuslocation VARCHAR(250),
//     campusimageurl VARCHAR(1000),
//     campusdescription VARCHAR(1000)

const mapStateToProps = function (state) {
	// console.log("here");
	console.log(state.campusReducer);
	return {
		campusInfo: state.campusReducer.campuses,
	};
};

const mapDispatchToProps = (dispatch) => ({
	getCampusData: () => dispatch(getCampusData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Campuses);
