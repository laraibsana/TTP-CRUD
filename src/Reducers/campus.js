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
			const elementsIndex = state.campuses.findIndex((element) => {
				return element.campus_id === action.payload.campus_id;
			});
			const campus = [...state.campuses];
			campus[elementsIndex] = {
				...campus[elementsIndex],
				campusname: action.payload.campusname,
				campuslocation: action.payload.campuslocation,
				campusimageurl: action.payload.campusimageurl,
				campusdescription: action.payload.campusdescription,
			};
			return {
				...state,
				campuses: campus,
			};

		default:
			return state;
	}
};

export default campus;
