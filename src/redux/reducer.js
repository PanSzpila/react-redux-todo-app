import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addToDoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //reducers here
    addToDos: (state, action) => {
      state.push(action.payload);
      return state;
    },
    removeToDos: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    updateToDos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            description: action.payload.description,
          };
        }
        return todo;
      });
    },
    completeToDos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
    },
  },
});

export const { addToDos, removeToDos, updateToDos, completeToDos } =
  addToDoReducer.actions;
export default addToDoReducer.reducer;
