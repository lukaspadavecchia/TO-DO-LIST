const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3001; // Cambia el puerto si es necesario

// Configurar Multer para guardar los archivos subidos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Carpeta donde se guardarán los archivos subidos
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Renombrar archivo con la fecha actual
  },
});

const upload = multer({ storage: storage });

// Ruta para manejar la subida de archivos
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('Error al subir el archivo.');
  }
  res.send('Archivo subido exitosamente.');
});

// Nueva ruta para la raíz
app.get('/', (req, res) => {
  res.send('Bienvenido a la API de subida de archivos!'); // Mensaje de bienvenida
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor backend ejecutándose en http://localhost:${port}`);
});

