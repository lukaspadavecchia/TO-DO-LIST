const express = require('express');
const multer = require('multer');
const path = require('path');
const { logUploadedFile } = require('./logUploadedFile'); 

const app = express();
const port = 3001;

// Configuración de Multer para cargar archivos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'upload/'); 
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
    logUploadedFile(req.file); // Registra el archivo subido
    res.send('Archivo subido exitosamente.');
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
app.get('/', (req, res) => {
  res.send('Servidor en funcionamiento'); // Respuesta simple para verificar que el servidor está activo
});
