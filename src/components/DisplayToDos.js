import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addToDos,
  removeToDos,
  updateToDos,
  completeToDos,
} from "../redux/reducer";
import TodoItem from "./ToDoItem";

const mapStateToProps = (state) => {
  return {
    toDoList: state.toDoList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToDo: (obj) => dispatch(addToDos(obj)),
    removeToDo: (id) => dispatch(removeToDos(id)),
    updateToDo: (obj) => dispatch(updateToDos(obj)),
    completeToDo: (id) => dispatch(completeToDos(id)),
  };
};

const DisplayToDos = (props) => {
  const [sort, setSort] = useState("active");
  console.log(props);
  return (
    <div className="displaytodos">
      <div className="buttons">
        <button onClick={() => setSort("active")}>Active</button>
        <button onClick={() => setSort("completed")}>completed</button>
        <button onClick={() => setSort("all")}>All</button>
      </div>
      <ul>
        {props.addToDo.length > 0 && sort === "active"
          ? props.toDoList.map((item) => {
              return (
                item.completed === false && (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeToDo={props.removeToDo}
                    updateToDo={props.updateToDo}
                    completeToDo={props.completeToDo}
                  />
                )
              );
            })
          : null}
        {/* for completed items */}
        {props.addToDo.length > 0 && sort === "completed"
          ? props.toDoList.map((item) => {
              return (
                item.completed === true && (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeToDo={props.removeToDo}
                    updateToDo={props.updateToDo}
                    completeToDo={props.completeToDo}
                  />
                )
              );
            })
          : null}
        {/* for all items */}
        {props.addToDo.length > 0 && sort === "all"
          ? props.toDoList.map((item) => {
              return (
                <TodoItem
                  key={item.id}
                  item={item}
                  removeToDo={props.removeToDo}
                  updateToDo={props.updateToDo}
                  completeToDo={props.completeToDo}
                />
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayToDos);
