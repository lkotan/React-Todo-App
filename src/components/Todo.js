import { FaTimes } from "react-icons/fa";

const Todo = ({ todo,onDelete,onToggle }) => {
  return (
    <>
      <h3 className={`todo ${todo.completed ? 'completed' : ''}`} onDoubleClick={() => onToggle(todo.id)}>
        {todo.name}{" "}
        <FaTimes
          style={{ color: "#673ab7", cursor: "pointer" }}
          onClick={() => onDelete(todo.id)}
        />
      </h3>
    </>
  );
};

export default Todo;
