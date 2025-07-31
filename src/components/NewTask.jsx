import React from 'react';

function NewTask({ newTask, handleChange, handleSubmit }) {
    return (
        <form className="new-task-form" onSubmit={handleSubmit}>
            <input
                className="new-task-input"
                type="text"
                placeholder="Add a new task"
                value={newTask}
                onChange={handleChange}
            />
            <button className="add-task-btn" type="submit">Add Task</button>
        </form>
    );
}

export default NewTask;