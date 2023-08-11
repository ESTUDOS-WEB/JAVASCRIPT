import { createConnection } from "net";

const port = 5000;
const host = "localhost";
const cliente = createConnection(port, host, () => {
  console.log("Cliente conectou com servidor.");
});


cliente.emit("conection")
cliente.emit("data", "meus dados");

cliente.emit("end");