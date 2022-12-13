import { GET_EXPERIENCE } from "../Actions";

const initialState = {
  experience: {},
};

const experienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXPERIENCE:
      return {
        ...state,
        experience: action.payload,
      };
    default:
      return state;
  }
};

export default experienceReducer;
