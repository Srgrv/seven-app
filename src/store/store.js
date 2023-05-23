//packages
import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./listSlice/listSlice";

const store = configureStore({
  reducer: {
    todos: listSlice,
  },
});

export default store;
