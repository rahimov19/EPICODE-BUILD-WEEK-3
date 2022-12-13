import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userReducer from "../reducers/userReducer";
import experienceReducer from "../reducers/experienceReducer";

const bitReducer = combineReducers({
  user: userReducer,
  experience: experienceReducer,
});

export const store = configureStore({ reducer: bitReducer });
