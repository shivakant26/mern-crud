import { combineReducers, configureStore } from "@reduxjs/toolkit";
import crudSlice from "./crudSlice";

const rootReducer = combineReducers({
  crud: crudSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
