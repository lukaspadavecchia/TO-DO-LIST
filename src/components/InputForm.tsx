// src/app/components/InputForm.tsx
import React, { useState } from 'react';

const InputForm = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) return;
    addTask(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Agrega una nueva tarea" 
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default InputForm;

