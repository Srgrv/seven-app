import React from "react";

export const Form = ({ value, setValue, addTodo }) => {
  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default Form;
