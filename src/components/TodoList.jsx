import TodoItem from "./TodoItem";

function TodoList({ todos, updateTodo, deleteTodo }) {
  return (
    <div className="col-8">
      <div className="card text-bg-light">
        <h5 className="card-header">View Todos</h5>
        <div className="card-body">
          {todos.length === 0 ? (
            <p className="card-text">
              Welcome! To get started, add a new todo item using the form on the
              left.
            </p>
          ) : (
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                updateTodo={updateTodo}
                deleteTodo={deleteTodo}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
