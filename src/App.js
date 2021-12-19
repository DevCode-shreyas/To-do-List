import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [currentTask, setCurrentTask] = useState("");

  const inputTask = useRef(null);

  // Array destructuring
  const addTask = () => {
    setTodoList([...todoList, { task: currentTask, completed: false }]);
    inputTask.current.value = "";
    setCurrentTask("");
  };

  const deleteTask = (taskToDelete) => {
    setTodoList(todoList.filter((task) => task.task !== taskToDelete));
  };

  const completeTask = (taskToComplete) => {
    setTodoList(
      todoList.map((task) =>
        task.task === taskToComplete
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>
        <input
          ref={inputTask}
          type="text"
          placeholder="Task..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTask();
            }
          }}
          onChange={(e) => setCurrentTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <hr />
      <ul>
        {todoList.map((val, key) => {
          return (
            <div id="task">
              <li key={key}>{val.task}</li>
              <button onClick={() => completeTask(val.task)}>Completed</button>
              <button onClick={() => deleteTask(val.task)}>X</button>
              {val.completed ? (
                <h1>Task completed</h1>
              ) : (
                <h1>Task not completed</h1>
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
