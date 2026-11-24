const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos para el frontend si tienes interfaz gráfica
app.use(express.static('public'));

// Permite peticiones desde cualquier origen (CORS)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

// Endpoint principal: Obtener clima por ciudad
app.get('/api/clima/:ciudad', (req, res) => {
    const ciudad = req.params.ciudad.toLowerCase();
    const rutaArchivo = path.join(__dirname, 'datos', `${ciudad}.md`);

    // Validar si existe el archivo .md
    if (!fs.existsSync(rutaArchivo)) {
        return res.status(404).json({
            status: "error",
            message: `No se encontró información para la ciudad: ${ciudad}`,
            ciudades_disponibles: ["mexico", "madrid", "tokio"]
        });
    }

    // Leer el archivo .md
    fs.readFile(rutaArchivo, 'utf8', (err, contenidoMd) => {
        if (err) {
            return res.status(500).json({ status: "error", message: "Error al leer el archivo .md" });
        }

        res.json({
            status: "success",
            ciudad: ciudad.charAt(0).toUpperCase() + ciudad.slice(1),
            archivo: `${ciudad}.md`,
            contenido_markdown: contenidoMd
        });
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 API de Clima corriendo en: http://localhost:${PORT}`);
    console.log(`Prueba consultando: http://localhost:${PORT}/api/clima/mexico`);
});