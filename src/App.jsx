import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <h1>To Do List</h1>
        {/* NewTask component will go here */}
        <div className="task-list">
          {/* Task components will be rendered here */}
        </div>
        
      </main>
    </>
  )
}

export default App
