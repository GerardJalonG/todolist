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

  return (
    <main>
      <h1>To Do List</h1>
      <NewTask newTask={newTask} handleChange={handleChange} handleSubmit={handleSubmit} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </main>
  );
}

export default App
