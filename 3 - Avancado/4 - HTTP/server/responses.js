const produtos = [
  { codigo: 1, preco: 100 },
  { codigo: 2, preco: 200 },
  { codigo: 3, preco: 300 },
  { codigo: 4, preco: 400 },
  { codigo: 5, preco: 500 },
];

module.exports = {
  get(path, req, res) {
    const aux = path.split("/");
    const codigo = Number.parseInt(aux[aux.length - 1]);
    
    res.writeHead(200, { "Content-Type": " application/json" });
    if(isNaN(codigo)){
        res.write(JSON.stringify(produtos));
    }else{
        const idx = produtos.findIndex((p) => p.codigo == codigo);
        res.write(JSON.stringify(produtos[idx]));
    }
    res.end();
  },
  post(path, req, res) {
    const produto = {
      codigo: Math.max(...produtos.map((p) => p.codigo)) + 1,
      preco: Math.max(...produtos.map((p) => p.preco)) + 100,
    };

    produtos.push(produto);

    res.writeHead(201, { "Content-Type": " application/json" });
    res.write(JSON.stringify({ message: "Sucesso", codigo: produto.codigo }));
    res.end();
  },
  put(path, req, res) {
    const aux = path.split("/");
    const codigo = Number.parseInt(aux[aux.length - 1]);

    const idx = produtos.findIndex((p) => p.codigo == codigo);

    if (idx > -1) {
      produtos[idx] = { codigo, preco: 999999 };

      res.writeHead(200, { "Content-Type": " application/json" });
      res.write(JSON.stringify({ message: "Sucesso", codigo }));
    } else {
      res.writeHead(404, { "Content-Type": " application/json" });

      res.write(JSON.stringify({ message: "Item não encontrado." }));
    }
    res.end();
  },
  delete(path, req, res) {
    const aux = path.split("/");
    const codigo = Number.parseInt(aux[aux.length - 1]);

    const idx = produtos.findIndex((p) => p.codigo == codigo);

    if (idx > -1) {
      produtos.splice(idx, 1);

      res.writeHead(200, { "Content-Type": " application/json" });
      res.write(JSON.stringify({ message: "Sucesso", codigo }));
    } else {
      res.writeHead(404, { "Content-Type": " application/json" });

      res.write(JSON.stringify({ message: "Item não encontrado." }));
    }
    res.end();
  },
};
