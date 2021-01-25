import axios from "axios";

export const getNoCampusStudentDataAction = (payload) => {
	return {
		type: "GET_NO_STUDENT_DATA",
		payload,
	};
};

export const deleteNoCampusStudentDataAction = (payload) => {
	return {
		type: "DELETE_NO_STUDENT_DATA",
		payload,
	};
};

export const updateNoCampusStudentDataAction = (payload) => {
	return {
		type: "UPDATE_NO_STUDENT_DATA",
		payload,
	};
};

export const createNoCampusStudentDataAction = (payload) => {
	return {
		type: "CREATE_NO_STUDENT_DATA",
		payload,
	};
};

export const getNoCampusStudentData = () => {
	return async (dispatch) => {
		try {
			const response = await axios.get("http://localhost:5000/noCampusStudent");
			dispatch(getNoCampusStudentDataAction(response.data));
		} catch (error) {
			console.error(error);
		}
	};
};
