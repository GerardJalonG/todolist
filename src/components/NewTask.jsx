import React from 'react';

function NewTask({ newTask, handleChange, handleSubmit }) {
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a new task"
                value={newTask}
                onChange={handleChange}
            />
            <button type="submit">Add Task</button>
        </form>
    );
}

export default NewTask;