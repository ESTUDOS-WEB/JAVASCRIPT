let computador = {
  _marca: "",
  _ano: 0,
  get marca() {
    return String(this._marca);
  },
  get ano() {
    return Number(this._ano);
  },
  set marca(novaMarca) {
    if (typeof novaMarca == "string") {
      this._marca = novaMarca;
    } else {
      throw new Error("Erro no setter de marca");
    }
  },
  set ano(novoAno) {
    if (typeof novoAno == "number") {
      this._ano = novoAno;
    } else {
      throw new Error("Erro no setter de ano");
    }
  },
};

console.log(computador.ano, computador.marca);

computador.marca = "Acer";
computador.ano = 2020;

console.log(computador.ano, computador.marca);

console.log(computador.marca);
console.log(computador._marca);
computador.marca = 123;
console.log(computador.marca);
