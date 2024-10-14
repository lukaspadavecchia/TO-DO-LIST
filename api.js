// api.js
import axios from 'axios';

// Función para obtener tareas
export const fetchTasks = async () => {
  try {
    const response = await axios.get('http://localhost:3001/tasks'); // Asegúrate de que esta URL sea correcta
    return response.data;
  } catch (error) {
    console.error('Error al obtener las tareas:', error);
    throw error; // Lanza el error para manejarlo en el componente
  }
};
