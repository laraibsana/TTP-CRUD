const initialState = {
	students: [],
};

const student = (state = initialState, action) => {
	switch (action.type) {
		case "GET_STUDENT_DATA":
			return { ...state, students: action.payload };

		default:
			return state;
	}
};

export default student;
