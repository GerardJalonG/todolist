import React, {useState} from "react";

function TaskList({ tasks }) {
    return (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
            {tasks.map(task => (
                <li key={task.id}>{task.text}</li>
            ))}
        </ul>
    );
}

export default TaskList;