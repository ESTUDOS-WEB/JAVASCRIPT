import { Resolver } from "dns";

const resolverDNS = new Resolver();
const sites = ["www.google.com.br", "www.globo.com"];

resolverDNS.setServers(["8.8.8.8", "8.8.4.4"]);

resolverDNS.resolve(sites[1], (erro, ip) => {
  if (erro) {
    console.log(erro);
    return erro;
  }
  if (ip) {
    console.log(ip);
    return ip;
  }
});
