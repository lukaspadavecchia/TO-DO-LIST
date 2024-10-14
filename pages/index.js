import React, { useState } from 'react';

const Home = () => {
  const [file, setFile] = useState(null);

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append('file', file);

    // Corregir la sintaxis aquí: agrega un espacio entre `await` y `fetch`
    await fetch('http://localhost:3001/upload', {
      method: 'POST',
      body: formData,
    }).then(response => {
      if (response.ok) {
        alert('Archivo subido exitosamente.');
      } else {
        alert('Error al subir el archivo.');
      }
    });
  };

  const deleteFile = async (filename) => {
    await fetch(`http://localhost:3001/delete/${filename}`, {
      method: 'DELETE',
    }).then(response => {
      if (response.ok) {
        alert('Archivo eliminado exitosamente.');
      } else {
        alert('Error al eliminar el archivo.');
      }
    });
  };

  return (
    <div>
      <h1>Subir Archivo</h1>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={uploadFile}>Cargar Archivo</button>
      {/* Eliminar archivo - reemplaza 'nombre_del_archivo' con el archivo deseado */}
      <button onClick={() => deleteFile('nombre_del_archivo')}>Eliminar Archivo</button>
    </div>
  );
};

export default Home;
