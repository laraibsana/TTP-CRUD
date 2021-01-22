const initialState = {
	campuses: [],
};

const campus = (state = initialState, action) => {
	switch (action.type) {
		case "GET_CAMPUS_DATA":
			return { ...state, campuses: action.payload };
		default:
			return state;
	}
};

export default campus;
