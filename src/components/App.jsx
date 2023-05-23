//packages
import React, { useState } from "react";
import { useDispatch } from "react-redux";
//actions
import { addTodo } from "../store/listSlice/listSlice";

//styles
import "../styles/App.css";

//components
import List from "./List/List";
import Form from "./Form/Form";

export const App = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ value }));
    setValue("");
  };
  return (
    <div>
      <Form addTodo={addTask} value={value} setValue={setValue} />
      <List />
    </div>
  );
};

export default App;
