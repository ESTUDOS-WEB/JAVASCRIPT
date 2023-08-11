import http from "http";

const porta = 5000;
const ip = "localhost";

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(req.url);
    const URL = res.url;
    const METHOD = res.method;

    if (URL == "/" && METHOD == "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.sendDate({ teste: "teste" });
    } else {
      res.write("teste");
    }
    res.end();
  })
  .listen(5000, "localhost", () =>
    console.log(`Servidor rodando em http://localhost:5000/`)
  );
