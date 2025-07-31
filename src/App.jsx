import { useState } from 'react'
import './App.css'
import NewTask from './components/NewTask'
import TaskList from './components/TaskList'


function App() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    setTasks([{ id: Date.now(), text: newTask }, ...tasks]);
    setNewTask("");
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <main>
      <h1>ToDo List</h1>
      <NewTask newTask={newTask} handleChange={handleChange} handleSubmit={handleSubmit} />
      <TaskList tasks={tasks} handleDelete={handleDelete} />
    </main>
  );
}

export default App
