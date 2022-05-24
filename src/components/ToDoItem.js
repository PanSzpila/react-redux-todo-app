import React, { useRef } from "react";
import { useDispatch } from "react-redux";

const ToDoItem = (props) => {
  const dispatch = useDispatch();
  const { item, updateToDo, removeToDo, completeToDo } = props;

  const inputRef = useRef(true);
  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };
  const update = (id, value, e) => {
    if (e.which === 13) {
      dispatch(updateToDo({ id, description: value }));
      inputRef.current.disabled = true;
    }
  };

  return (
    <div>
      <li key={item.id} className="card">
        <textarea
          ref={inputRef}
          disabled={inputRef}
          defaultValue={item.description}
          onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
        />
        <div className="buttons">
          <button onClick={() => changeFocus()}>Edit</button>
          <button onClick={() => dispatch(completeToDo(item.id))}>
            completed
          </button>
          <button onClick={() => dispatch(removeToDo(item))}>Delete</button>
        </div>
        {item.completed && <span className="completed">done</span>}
      </li>
    </div>
  );
};

export default ToDoItem;
