import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userReducer from "../reducers/userReducer";

const bitReducer = combineReducers({
  user: userReducer,
});

export const store = configureStore({ reducer: bitReducer });
