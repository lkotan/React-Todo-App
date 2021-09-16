import { useState, useEffect } from "react";
import Header from "./components/Header";
import Todos from "./components/Todos";

function App() {
  const baseURL = "http://localhost:3000";

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const todosFromServer = await fetchTodos();
      setTodos(todosFromServer);
    };
    getTodos();
  }, []);

  const fetchTodos = async () => {
    const res = await fetch(`${baseURL}/todos`);
    const data = await res.json();
    return data;
  };

  const fetchTodo = async (id) => {
    const res = await fetch(`${baseURL}/todos/${id}`);
    const data = await res.json();
    return data;
  };

  const add = async (todo) => {
    const res = await fetch(`${baseURL}/todos`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    const data = await res.json();
    setTodos([...todos, data]);
  };

  const deleteTodo = async (id) => {
    const res = await fetch(`${baseURL}/todos/${id}`, {
      method: "DELETE",
    });
    res.status === 200
      ? setTodos(todos.filter((todo) => todo.id !== id))
      : alert("Error Deleting This Todo");
  };

  const toggleCompleted = async (id) => {
    const todo = await fetchTodo(id);
    const updateTodo = { ...todo, completed: !todo.completed };
    const res = await fetch(`${baseURL}/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateTodo),
    });
    const data = await res.json();

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: data.completed } : todo
      )
    );
  };

  return (
    <div className="container">
      <Header add={add} title="Todo List React App" />
      {todos.length > 0 ? (
        <Todos todos={todos} onDelete={deleteTodo} onToggle={toggleCompleted} />
      ) : (
        <h1>No Todos To Show</h1>
      )}
    </div>
  );
}

export default App;
