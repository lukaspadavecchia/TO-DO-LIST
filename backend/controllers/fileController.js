const path = require('path');
const multer = require('multer');

// Configuración de multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

const uploadFile = (req, res) => {
  if (!req.file) {
    return res.status(400).send('Error al subir el archivo.');
  }
  res.send({ message: 'Archivo subido exitosamente.', file: req.file });
};

module.exports = {
  upload,
  uploadFile,
};
