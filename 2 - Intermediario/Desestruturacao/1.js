let ana = {
    nome: 'Ana',
    idade: 23,
    altura: 1.56,
    peso: 67,
};


let pessoa = {
    nome: 'Paulo',
    idade: 23,
    altura: 1.56,
    peso: 67,
    amigos: [ana, 'andre', 'amada']
};



function imprimirNome({nome, idade, amigos}){
    console.log(nome, idade, amigos[0].nome);
};

function imprimirNomeArray([]){
    console.log(nome, idade);
};

imprimirNome(pessoa);

