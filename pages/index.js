import { useState } from 'react';

export default function Home() {
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('http://localhost:3001/upload', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      alert('Archivo subido exitosamente!');
    } else {
      alert('Error al subir el archivo.');
    }
  };

  return (
    <div>
      <h1>Sube tu archivo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit">Subir</button>
      </form>
    </div>
  );
}
