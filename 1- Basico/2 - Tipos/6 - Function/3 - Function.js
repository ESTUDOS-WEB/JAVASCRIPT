let fruta1 = {
    nome: 'maça',
    imprimir: function (){
        console.log(fruta1.nome);
    }
};

let fruta2 = {
    nome: 'maça',
    imprimir: function (){
        console.log(this.nome);
    }
};

let fruta3 = {
    nome: 'maça',
    imprimir: () => {
        console.log(this);
    }
};



fruta1.imprimir();
fruta2.imprimir();
fruta3.imprimir();
