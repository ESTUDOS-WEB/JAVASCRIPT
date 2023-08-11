import { Resolver } from "dns";

const RESOLVER = new Resolver();
const site = "www.google.com.br";

RESOLVER.setServers(["8.8.8.8", "8.8.4.4"]);

RESOLVER.resolve4(site, (err, ip) => {
  if (err) console.log(err);
  if (ip) console.log("IP(4): ", ip);
});

RESOLVER.resolve6(site, (err, ip) => {
  if (err) console.log(err);
  if (ip) console.log("IP(6): ", ip);
});

RESOLVER.reverse("142.250.78.227", (err, siteName) => {
  if (err) console.log(err);
  if (siteName) console.log("Site: ", siteName);
});
