const initialState = {
	nocampusstudents: [],
};

const nocampusstudent = (state = initialState, action) => {
	switch (action.type) {
		case "GET_NO_STUDENT_DATA":
			return { ...state, nocampusstudents: action.payload };
		case "CREATE_NO_STUDENT_DATA":
			return {
				...state,
				nocampusstudents: state.nocampusstudents.concat(action.payload),
			};
		case "DELETE_NO_STUDENT_DATA":
			const result = state.nocampusstudents.filter(
				(student) => action.payload.student_id != student.student_id
			);
			return { nocampusstudents: result };
		case "UPDATE_NO_STUDENT_DATA":
			const elementIndex = state.nocampusstudents.findIndex(
				(element) => element.student_id == action.payload.student_id
			);
			let newArray = [...state.nocampusstudents];

			newArray[elementIndex] = action.payload;

			return {
				nocampusstudents: newArray,
			};
		default:
			return state;
	}
};

export default nocampusstudent;
