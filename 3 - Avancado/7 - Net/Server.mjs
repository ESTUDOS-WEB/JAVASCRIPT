import { createServer } from "net";

const port = 5000;
const host = "localhost";

const SERVER = createServer((conection) => {
  conection.on("conection", () => console.log("Cliente conectado."));
  conection.on("end", ()=> console.log("Conexão finalizada."));
  conection.on("data", (data)=> console.log(data))
});

SERVER.listen(port, host, ()=> console.log("Servidor iniciado."));
