import React, {useState} from "react";

function TaskList({ tasks, handleDelete }) {
    return (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
            {tasks.map(task => (
                <li
                    key={task.id}
                    style={{ cursor: 'pointer', userSelect: 'none' }}
                    onClick={() => handleDelete(task.id)}
                    title="Haz click para eliminar"
                >
                    {task.text}
                </li>
            ))}
        </ul>
    );
}

export default TaskList;