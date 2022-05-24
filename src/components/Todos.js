//https://www.youtube.com/watch?v=YhgSuUkWlK4 useref 25',  43:25

import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToDos,
  removeToDos,
  updateToDos,
  completeToDos,
} from "../redux/reducer";

/* const mapStateToProps = (state) => {
  return {
    todos: state,
  };
}; */

const Todos = (props) => {
  const [toDo, setToDo] = useState("");

  const { toDoList } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setToDo(e.target.value);
  };
  // console.log("state from store", toDoList);

  return (
    <div className="addTodos">
      <input
        type="text"
        onChange={(e) => setToDo(e.target.value)}
        className="todo-input"
      />

      <button
        className="add-btn"
        onClick={() =>
          dispatch(
            addToDos({
              id: Math.floor(Math.random() * 1000),
              description: toDo,
              completed: false,
            })
          )
        }
      >
        Add
      </button>
      <br />
    </div>
  );
};

//export default connect(mapStateToProps, null)(Todos);
export default Todos;
