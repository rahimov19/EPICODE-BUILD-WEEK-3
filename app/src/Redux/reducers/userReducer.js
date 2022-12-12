import { SAVE_USER } from "../Actions";
import { SAVE_USERS } from "../Actions";
import { GUEST_USER } from "../Actions";

const initialState = {
  user: {},
  users: {},
  guest: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GUEST_USER:
      return {
        ...state,
        guest: action.payload,
      };
    case SAVE_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SAVE_USERS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
