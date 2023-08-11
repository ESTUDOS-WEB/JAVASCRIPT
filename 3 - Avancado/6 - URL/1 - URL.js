import { URL } from "node:url";

const url = new URL(
  "https://www.google.com/search?q=node+url&oq=node+url&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDQ1OTNqMGo0qAIAsAIA&sourceid=chrome&ie=UTF-8"
);
console.log("origin: ", url.origin);
console.log("protocol: ", url.protocol);
console.log("host: ", url.host);
console.log("pathname: ", url.pathname);
console.log("href: ", url.href);
console.log("searchParams: ", url.searchParams);
