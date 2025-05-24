function TodoItem({ todo, updateTodo, deleteTodo }) {
  let priorityClass = "";
  switch (todo.priority) {
    case 1:
      priorityClass = "bg-success";
      break;
    case 2:
      priorityClass = "bg-warning";
      break;
    case 3:
      priorityClass = "bg-danger";
      break;
    default:
      priorityClass = "bg-light";
  }

  return (
    <div className={`card mb-3 ${priorityClass}`}>
      <div className="card-body">
        <h5 className="card-title">{todo.description}</h5>
        <p className="card-text">Priority: {todo.priority}</p>
        <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
