import { useState } from "react";

const AddTodo = ({add}) => {
  const [name, setName] = useState("");

  const addTodo = () => {
    if (!name) {
      alert("Please add a todo");
      return;
    }
    const completed=false;
    add({name,completed})

    setName('')
  };

  return (
    <div className="form-control">
      <input type="text" placeholder="Add Todo" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={addTodo} className="btn">
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
