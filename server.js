const http = require("node:http");
const info = require("./data");

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});

    const html = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${info.titulo}</title>
        </head>
        <body>
            <h1>${info.titulo}</h1>
            <h3>${info.subtitulo}</h3>
            <p>${info.descripcion}</p>
            <h2>${info.tituloNoticia}</h2>
            <p>${info.descripcionNoticia}</p>
        </body>
        </html>
    `;

    res.end(html);
});

server.listen(0, () => {
    console.log(`Server iniciado en puerto: http://localhost:${server.address().port}`)
});