import { useState } from "react";

function TodoItem({ todo, updateTodo, deleteTodo }) {
  const [editMode, setEditMode] = useState(false);
  const [updatedText, setUpdatedText] = useState(todo.description);
  const [updatedPriority, setUpdatedPriority] = useState(todo.priority);

  let priorityClass = "";
  switch (todo.priority) {
    case 1:
      priorityClass = "priority-high bg-danger text-white";
      break;
    case 2:
      priorityClass = "priority-medium bg-warning text-dark";
      break;
    case 3:
      priorityClass = "priority-low bg-success text-white";
      break;
    default:
      priorityClass = "bg-light";
  }

  const handleUpdate = () => {
    updateTodo(todo.id, {
      description: updatedText,
      priority: parseInt(updatedPriority),
    });
    setEditMode(false);
  };

  const toggleCompleted = () => {
    updateTodo(todo.id, { completed: !todo.completed });
  };

  return (
    <div
      data-testid="todo-item"
      className={`card mb-3 ${priorityClass} ${
        todo.completed ? "opacity-50" : ""
      }`}
    >
      <div className="card-body">
        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="checkbox"
            checked={todo.completed}
            onChange={toggleCompleted}
            id={`todo-complete-${todo.id}`}
          />
          <label
            className="form-check-label"
            htmlFor={`todo-complete-${todo.id}`}
          >
            Mark as {todo.completed ? "Incomplete" : "Complete"}
          </label>
        </div>

        {editMode ? (
          <>
            <textarea
              data-testid="update-todo-text"
              className="form-control mb-2"
              value={updatedText}
              onChange={(e) => setUpdatedText(e.target.value)}
            />
            <select
              className="form-select mb-2"
              value={updatedPriority}
              onChange={(e) => setUpdatedPriority(e.target.value)}
            >
              <option value="1">1 - High</option>
              <option value="2">2 - Medium</option>
              <option value="3">3 - Low</option>
            </select>
            <button
              data-testid="update-todo"
              className="btn btn-primary me-2"
              onClick={handleUpdate}
            >
              Update
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setEditMode(false)}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <h5
              className={`card-title ${
                todo.completed ? "text-decoration-line-through" : ""
              }`}
            >
              {todo.description}
            </h5>
            <p className="card-text">Priority: {todo.priority}</p>
            <button
              data-testid="edit-todo"
              className="btn btn-primary me-2"
              onClick={() => setEditMode(true)}
            >
              Edit
            </button>
            <button
              data-testid="delete-todo"
              className="btn btn-secondary"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default TodoItem;
