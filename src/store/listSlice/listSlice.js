//packages
import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "list",
  initialState: {
    list: [],
    status: null,
    error: null,
  },
  reducers: {
    addTodo(state, action) {
      state.list.push({
        id: new Date().toISOString(),
        title: action.payload.value,
        completed: false,
      });
    },
    deleteTodo(state, action) {
      console.log(action.payload);
      state.list = state.list.filter((todo) => {
        return todo.id !== action.payload.id;
      });
    },
    toggleTodo(state, action) {
      const change = state.list.find((todo) => todo.id === action.payload.id);
      change.completed = !change.completed;
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo } = listSlice.actions;
export default listSlice.reducer;
