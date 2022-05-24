import { configureStore } from "@reduxjs/toolkit";
import addToDoReducer from "./reducer";

export const store = configureStore({
  reducer: {
    toDoList: addToDoReducer,
  },
});

export default store;
