import axios from "axios";

export const getCampusDataAction = (payload) => {
	return {
		type: "GET_CAMPUS_DATA",
		payload,
	};
};

export const deleteCampusDataAction = (payload) => {
	return {
		type: "DELETE_CAMPUS_DATA",
		payload,
	};
};

export const updateCampusDataAction = (payload) => {
	return {
		type: "UPDATE_CAMPUS_DATA",
		payload,
	};
};

export const createCampusDataAction = (payload) => {
	return {
		type: "CREATE_CAMPUS_DATA",
		payload,
	};
};

export const getSingleCampus = (payload, payload1) => {
	return {
		type: "GET_SINGLE_DATA",
		payload,
		payload1,
	};
};

export const getCampusData = () => {
	return async (dispatch) => {
		try {
			const response = await axios.get("http://localhost:5000/campus");
			dispatch(getCampusDataAction(response.data));
		} catch (error) {
			console.error(error);
		}
	};
};
