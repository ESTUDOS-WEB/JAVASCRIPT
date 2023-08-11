import { URL } from "node:url";

const url2 = new URL("ftp://ana:senha@meuhost:3000/livros/livro1234.zip");
console.log("origin: ", url2.origin);
console.log("href: ", url2.href);
console.log("protocol: ", url2.protocol);
console.log("username: ", url2.username);
console.log("password: ", url2.password);