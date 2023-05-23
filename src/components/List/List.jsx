//packages
import React from "react";
import { useSelector } from "react-redux";

//actions
import { deleteTodo } from "../../store/listSlice/listSlice";

//components
import Todo from "../Todo/Todo";

export const List = () => {
  const todos = useSelector((state) => state.todos.list);

  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <Todo {...todo} deleteTodo={deleteTodo} />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
