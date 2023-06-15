let poliedro = {
    _nome: 'Jose',
    get nome(){
        return this._nome;
    },
    set nome(nome){
        this._nome = nome;
    },

    imprimirNome(){
        console.log(this.nome);
    }
}

console.log(1, poliedro);
console.log(2, poliedro.__proto__);
// poliedro.__proto__.imprimirNome = "";
poliedro.imprimirNome();