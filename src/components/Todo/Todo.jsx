//packages
import React from "react";
import styles from "../../styles/Todo.module.css";
import { useDispatch } from "react-redux";

//actions
import { deleteTodo, toggleTodo } from "../../store/listSlice/listSlice";

export const Todo = ({ title, id, completed }) => {
  const dispatch = useDispatch();
  return (
    <li key={id}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodo({ id }))}
      />
      <span>{title}</span>
      <span
        className={styles.close}
        onClick={() => dispatch(deleteTodo({ id }))}
      >
        &times;
      </span>
    </li>
  );
};

export default Todo;
