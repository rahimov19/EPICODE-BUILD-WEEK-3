import { GET_POSTS, MY_POSTS } from "../Actions";
import { GET_MY_POST } from "../Actions";

const initialState = {
  posts: {},
  mypost: {},
  myposts: {},
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case GET_MY_POST:
      return {
        ...state,
        mypost: action.payload,
      };
    case MY_POSTS:
      return {
        ...state,
        myposts: action.payload,
      };
    default:
      return state;
  }
};

export default newsReducer;
