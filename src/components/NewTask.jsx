import React, {useState} from 'react';

function NewTask() {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim() === "") return;
        // Aquí podrías pasar la tarea al padre
        setTask("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a new task"
                value={task}
                onChange={e => setTask(e.target.value)}
            />
            <button type="submit">Add Task</button>
        </form>
    );
}

export default NewTask;