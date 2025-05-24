import { useState } from "react";

function TodoForm({ addTodo }) {
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("1");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim() === "") {
      alert("Please enter a todo item.");
      return;
    }
    if (priority < 1 || priority > 3) {
      alert("Please select a valid priority.");
      return;
    }
    const newTodo = {
      id: Date.now(),
      description,
      priority: parseInt(priority),
      completed: false,
      editEnabled: false,
    };
    addTodo(newTodo);
    setDescription("");
    setPriority("1");
  };

  return (
    <div className="col-4">
      <div className="card text-bg-light">
        <h5 className="card-header">Add New Todo Item</h5>
        <form onSubmit={handleSubmit}>
          <div className="card-body">
            <label htmlFor="newTodoItem" className="fw-bold">
              I want to...
            </label>
            <div className="input-group mb-3">
              <textarea
                id="newTodoItem"
                data-testid="create-todo-text"
                className="form-control"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              ></textarea>
            </div>
            <label htmlFor="newTodoPriority" className="fw-bold">
              How much of a priority is this?
            </label>
            <select
              id="newTodoPriority"
              data-testid="create-todo-priority"
              className="form-select mb-3"
              onChange={(e) => setPriority(e.target.value)}
              value={priority}
            >
              <option value="1">1 - Low</option>
              <option value="2">2 - Medium</option>
              <option value="3">3 - High</option>
            </select>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-success form-control">
              Add Todo Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TodoForm;
