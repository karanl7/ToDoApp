import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([
    { task: "sample Task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addNewtask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
    });

    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };

  let markAsDone = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      });
    });
  };

  return (
    <div>
      <input
        placeholder=" Add a task"
        value={newTodo}
        onChange={updateTodoValue}
        className="border-2 p-1 border-black rounded-lg"
      ></input>
      <br></br>
      <br></br>
      <button
        onClick={addNewtask}
        className="border rounded-md text-black bg-blue-500 p-1"
      >
        Add a Task
      </button>
      <br></br>
      <br></br>

      <hr></hr>
      <h4>Tasks Todo</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={todo.isDone ? { textDecorationLine: "line-through" } : {}}
            >
              {todo.task}
            </span>
            &nbsp;&nbsp;&nbsp;
            <button
              onClick={() => deleteTodo(todo.id)}
              className="border rounded-md text-black bg-blue-500 p-1"
            >
              delete
            </button>{" "}
            <span></span>
            <button
              onClick={() => markAsDone(todo.id)}
              className="border-2 rounded-md text-black bg-blue-500 p-1"
            >
              Mark As Done
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
