import { useState } from 'react'
import './App.css'
import NewTask from './components/NewTask'
import TaskList from './components/TaskList'


function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <>
      <main>
        <h1>To Do List</h1>
        <NewTask />
        <div className="task-list">
        </div>
        
      </main>
    </>
  )
}

export default App
