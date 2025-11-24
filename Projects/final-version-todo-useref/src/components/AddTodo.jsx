/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useRef } from "react";

function AddTodo({ onNewItem }) {
  const todoDateElem = useRef();
  const dueDateElem = useRef();

  const handleAddbutton = (e) => {
    const todoName = todoDateElem.current.value;
    const todoDate = dueDateElem.current.value;
    todoDateElem.current.value = "";
    dueDateElem.current.value = "";
    onNewItem(todoName, todoDate);
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" ref={todoDateElem} placeholder="Enter Todo Here" />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElem} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddbutton}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
