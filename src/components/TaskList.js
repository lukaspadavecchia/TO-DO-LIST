import React from 'react';

const TaskList = ({ tasks, onToggleTask, onDeleteTask }) => {
    return (
        <ul>
            {tasks.map((task, index) => (
                <li key={index} className={task.completed ? 'completed' : ''}>
                    <span onClick={() => onToggleTask(index)}>{task.text}</span>
                    <button onClick={() => onDeleteTask(index)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
