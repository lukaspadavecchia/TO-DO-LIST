const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3001;

// Ruta para el mensaje de bienvenida
app.get('/', (req, res) => {
  res.send('Bienvenido al backend de la TO-DO LIST');
});

// Configuración de Multer para cargar archivos (si es necesario)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Ruta para subir archivos
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('Error al subir el archivo.');
  }
  res.send('Archivo subido exitosamente.');
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
