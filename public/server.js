const express = require('express');
const multer = require('multer');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors()); // Permitir solicitudes de diferentes dominios

// Configuración de multer para manejar las subidas de archivos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Carpeta donde se guardarán los archivos
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // Nombre del archivo
    },
});

const upload = multer({ storage });

// Ruta para subir archivos
app.post('/upload', upload.single('file'), (req, res) => {
    res.send('Archivo subido correctamente');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});