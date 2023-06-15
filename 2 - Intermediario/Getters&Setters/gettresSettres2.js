let computador = {
  marca: "Dell",
  ano: 2018,

  get getMarca() {
    return String(this.marca);
  },
  get getAno() {
    return Number(this.ano);
  },
  set setMarca(novaMarca) {
    if (typeof novaMarca == "string") {
      this.marca = novaMarca;
    } else {
      throw new Error("Erro ao setter de marca");
    }
  },
  set setAno(novoAno) {
    if (typeof novoAno == "number") {
      this.ano = novoAno;
    } else {
      throw new Error("Erro ao setter de ano");
    }
  },
};

try {
  computador.setMarca = "LG";
  computador.setAno = "2023"; 
} catch (error) {
  console.error(error.message)
}

console.log(computador);
