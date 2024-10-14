// TodoList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  // Función para obtener tareas
  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:3001/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error al obtener las tareas:', error);
    }
  };

  // Llamar a fetchTasks cuando el componente se monta
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li> // Ajusta según la estructura de tu tarea
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
