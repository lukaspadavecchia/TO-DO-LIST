// src/components/TaskItem.tsx
import React from 'react';

interface TaskItemProps {
  task: string;
  removeTask: (task: string) => void;
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
