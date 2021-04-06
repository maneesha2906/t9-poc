import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import t9ConvertReducer from "./slices/t9ConvertSlice";

export default configureStore({
  reducer: {
    convertT9Store: t9ConvertReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});
