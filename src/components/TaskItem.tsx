// src/app/components/TaskItem.tsx
import React from 'react';

interface TaskItemProps {
  task: string; // Cambia esto según el tipo de dato que sea 'task'
  removeTask: (task: string) => void; // Cambia el tipo según lo que reciba removeTask
}

const TaskItem: React.FC<TaskItemProps> = ({ task, removeTask }) => {
    return (
      <li>
        {task}
        <button onClick={() => removeTask(task)}>Eliminar</button>
      </li>
    );
};

export default TaskItem;
