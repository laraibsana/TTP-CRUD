import axios from "axios";

const getStudentDataAction = (payload) => {
	return{
		type: "GET_STUDENT_DATA",
		payload,
	};
};

export const getStudentData = () => {
	return async (dispatch) => {
		try{
			const response = await axios.get("http://localhost:5000/school");
			console.log(response.data);
			dispatch(getStudentDataAction(response.data));
		}
		catch (error) {
			console.error(error);
		}
	};
};

export default getStudentDataAction;