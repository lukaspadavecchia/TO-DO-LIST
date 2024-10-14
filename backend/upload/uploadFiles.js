const fs = require('fs');
const path = require('path');

// Ruta de la carpeta de subida
const uploadDirectory = path.join(__dirname, 'upload');

// Función para registrar los archivos subidos
function logUploadedFile(file) {
    const logPath = path.join(uploadDirectory, 'uploads_log.txt');
    const logMessage = `Archivo subido: ${file.originalname} a las ${new Date().toISOString()}\n`;
    fs.appendFileSync(logPath, logMessage, 'utf8');
    console.log('Archivo registrado:', file.originalname);
}

// Exportar la función para usarla en otras partes
module.exports = {
    logUploadedFile,
};
