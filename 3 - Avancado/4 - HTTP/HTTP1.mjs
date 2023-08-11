import http from "http";

const porta = 5000;
const ip = "localhost";

// Criando servidor
const server = http.createServer((request, response) => {
  response.statusCode(200);
  response.end("SERVIDOR CRIADO");
});

// Iniciando servidor
server.listen(porta, ip, () => console.log(`Servidor rodando em http://${ip}:/${porta}/`));
