const initialState = {
	students: [],
};

const student = (state = initialState, action) => {
	switch (action.type) {
		case "GET_STUDENT_DATA":
			return { ...state, students: action.payload };
		case "CREATE_STUDENT_DATA":
			return { ...state, students: state.students.concat(action.payload) };
		case "DELETE_STUDENT_DATA":
			const result = state.students.filter(
				(student) => action.payload != student.student_id
			);
			return { students: result };
		case "UPDATE_STUDENT_DATA":
			const elementIndex = state.students.findIndex(
				(element) => element.student_id == action.payload.student_id
			);
			let newArray = [...state.students];

			newArray[elementIndex] = action.payload;

			return {
				students: newArray,
			};
		default:
			return state;
	}
};

export default student;
