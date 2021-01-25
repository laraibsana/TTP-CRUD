const initialState = {
	campuses: [],
};

const campus = (state = initialState, action) => {
	switch (action.type) {
		case "GET_CAMPUS_DATA":
			return { ...state, campuses: action.payload };
		case "DELETE_CAMPUS_DATA":
			const result = state.campuses.filter(
				(campus) => action.payload != campus.campus_id
			);
			return { campuses: result };

		case "UPDATE_CAMPUS_DATA":
			const elementIndex = state.campuses.findIndex(
				(element) => element.campus_id == action.payload.campus_id
			);
			let newArray = [...state.campuses];

			newArray[elementIndex] = action.payload;

			return {
				campuses: newArray,
			};

		case "CREATE_CAMPUS_DATA":
			return { ...state, campuses: state.campuses.concat(action.payload) };

		default:
			return state;
	}
};

export default campus;
