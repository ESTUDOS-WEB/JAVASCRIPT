console.log(this);

let pessoa = {
    nome: 'Gabriel',
    imprimirThis: function (){
        console.log(this);
    }
}

pessoa.imprimirThis();

