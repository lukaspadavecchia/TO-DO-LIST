// src/components/TaskItem.tsx
import React from 'react';

// Define la interfaz para las props
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
;
