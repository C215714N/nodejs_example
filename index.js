let app = require('http');

app.createServer( (request, response) => {
    response.end('conexion establecida')
} ).listen(5500)

// Puertos 
// 0 - 1023 (conocidos)
// 1024 - 49151 (reservados)
// 49152 - 65535 (dinamicos)