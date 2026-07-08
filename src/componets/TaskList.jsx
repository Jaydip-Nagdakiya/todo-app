function TaskList({ tasks, onDeleteTask }) {
  if (tasks.length === 0) {
    return <p className="empty-message">No tasks yet!</p>;
  }
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id}>
          {task.text}
               <button className="delete-btn" onClick={() => onDeleteTask(task.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
