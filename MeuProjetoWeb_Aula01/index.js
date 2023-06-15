
// Importe o módulo http e inicie o serviço na porta desejada //

const http = require('http');
const porta = 3000;

const server = http.createServer((request, response) => {
    response.setHeader('content-type', 'text/html; charset=utf-8');
    response.writeHead(200);
    response.write('<h1><strong>Olá Node JS !</strong></h1>');
    response.end();
});

server.listen(porta, () => {
    console.log('Servidor iniciado na porta :', porta);
});