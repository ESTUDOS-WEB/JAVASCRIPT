class Carro {
  _nome = "";
  constructor(nome) {
    this._nome = nome;
  }
  imprimir() {
    console.log(this._nome);
  }
}

export { Carro };
