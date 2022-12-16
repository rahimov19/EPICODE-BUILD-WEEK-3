import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userReducer from "../reducers/userReducer";
import experienceReducer from "../reducers/experienceReducer";
import newsReducer from "../reducers/newsReducer";
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: storage,
  tranforms: [
    encryptTransform({
      secretKey: "SECRET_KEY",
      onError: function (error) {
        console.log(error);
      },
    }),
  ],
};

const bitReducer = combineReducers({
  user: userReducer,
  experience: experienceReducer,
  posts: newsReducer,
});
const persistedReducer = persistReducer(persistConfig, bitReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
