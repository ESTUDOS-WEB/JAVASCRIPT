const { createServer } = require("http");
const response = require("./responses");

const port = 5000;
const host = "localhost";
const server = createServer((req, res) => {
  const METHOD = req.method.toUpperCase();
  const PATH = req.url;

  switch (METHOD) {
    case "GET":
      response.get(PATH, req, res);
      console.log(`${METHOD} - ${PATH} - HTTP ${req.httpVersion} `);
      break;
    case "POST":
      response.post(PATH, req, res);
      console.log(`${METHOD} - ${PATH} - HTTP ${req.httpVersion} `);
      break;
    case "PUT":
      response.put(PATH, req, res);
      console.log(`${METHOD} - ${PATH} - HTTP ${req.httpVersion} `);
      break;
    case "DELETE":
      response.delete(PATH, req, res);
      console.log(`${METHOD} - ${PATH} - HTTP ${req.httpVersion} `);
      break;
  }
});

function Server(dados) {
  if (!dados) dados = {};
  if (!dados.post) dados.port = port;
  if (!dados.host) dados.host = host;
  if (!dados.inicializacao)
    dados.inicializacao = () =>
      console.log(
        `Servidor em execução.\nURL: http://${dados.host}:${dados.port}/`
      );

  server.listen(dados.port, dados.host, dados.inicializacao);
}

module.exports = { Server };
