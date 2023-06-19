
// Importe o módulo http e inicie o serviço na porta desejada //
// const fs = require('fs');
// const http = require('http');
// const porta = 30000;
// // exemplo  2 //
// function receberRequisicao(request, response) {
//     response.setHeader('content-type', 'text/html; charset=utf-8');
//     response.writeHead(200);
//     response.write('Olá nodejs');
//     response.end();
// };

// const servidor = http.createServer(receberRequisicao);

// servidor.listen(porta, () => {
//     console.log("Servidor Iniciado com sucesso na porta: ", porta);
// });

// ///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Lendo o arquivo HTML
  fs.readFile('html/node.html', 'utf8', (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end('Erro interno do servidor');
      return;
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(data); // Envia o conteúdo HTML como resposta
  });
});

const port = 3000;
server.listen(port, () => {
  console.log(`Servidor está executando em http://localhost:${port}`);
});