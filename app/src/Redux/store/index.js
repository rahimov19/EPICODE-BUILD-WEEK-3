import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userReducer from "../reducers/userReducer";
import experienceReducer from "../reducers/experienceReducer";
import newsReducer from "../reducers/newsReducer";

const bitReducer = combineReducers({
  user: userReducer,
  experience: experienceReducer,
  posts: newsReducer,
});

export const store = configureStore({ reducer: bitReducer });
