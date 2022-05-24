import "./App.css";
import DisplayToDos from "./components/DisplayToDos";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <Todos />
      <DisplayToDos />
    </div>
  );
}

export default App;
