import axios from "axios";

export const getStudentDataAction = (payload) => {
	return {
		type: "GET_STUDENT_DATA",
		payload,
	};
};

export const deletStudentDataAction = (payload) => {
	return {
		type: "DELETE_STUDENT_DATA",
		payload,
	};
};

export const updatStudentDataAction = (payload) => {
	return {
		type: "UPDATE_STUDENT_DATA",
		payload,
	};
};

export const creatStudentDataAction = (payload) => {
	return {
		type: "CREATES_STUDENT_DATA",
		payload,
	};
};

export const getStudentData = () => {
	return async (dispatch) => {
		try {
			const response = await axios.get("http://localhost:5000/school");
			dispatch(getStudentDataAction(response.data));
		} catch (error) {
			console.error(error);
		}
	};
};
