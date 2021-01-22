import axios from "axios";

const getCampusDataAction = (payload) => {
	return {
		type: "GET_CAMPUS_DATA",
		payload,
	};
};

//Get all of the campus database from PSQL
export const getCampusData = () => {
	return async (dispatch) => {
		try {
			const response = await axios.get("http://localhost:5000/school/campus");
			console.log(response.data);
			dispatch(getCampusDataAction(response.data));
		} catch (error) {
			console.error(error);
		}
	};
};

export default getCampusDataAction;
