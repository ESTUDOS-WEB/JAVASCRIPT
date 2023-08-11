import { URL } from "node:url";

const url = new URL("http://localhost:5000/usuario/filhos?nome=ana&idade=34");
console.log("origin: ", url.origin);
console.log("protocol: ", url.protocol);
console.log("host: ", url.host);
console.log("pathname: ", url.pathname);
console.log("port: ", url.port);
console.log("href: ", url.href);
console.log("searchParams: ", url.searchParams);
