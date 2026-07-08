import { useState } from 'react';
import TaskForm from './componets/TaskForm';
import TaskList  from './componets/TaskList';
import './App.css';

function App() {
  const[tasks, setTasks]= useState(()=>{
    const data = localStorage.getItem("Tasks")
    return  data? JSON.parse(data) : []
  })
  
  function addTask(newTask) {
    const data = {
      id: Date.now(),
      text: newTask
    }
     const newTasks = [...tasks, data] 
    setTasks(newTasks)
    saveTask(newTasks)
    
  }

  function saveTask(task){
    localStorage.setItem("Tasks",JSON.stringify(task))
  }
  
  function deleteTask(idToDelete) {
    const newTasks = tasks.filter((task)=> task.id !== idToDelete )
    setTasks(newTasks)
    saveTask(newTasks)
  }

  return (
    <div className="app-container">
      <h1 className="app-title">📝 My To-Do List</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onDeleteTask={deleteTask} />
    </div>
  );
}

export default App;