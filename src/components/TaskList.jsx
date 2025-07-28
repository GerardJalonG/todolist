import React, {useState} from "react";

function TaskList({ tasks }) {
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>{task.text}</li>
            ))}
        </ul>
    );
}

export default TaskList;