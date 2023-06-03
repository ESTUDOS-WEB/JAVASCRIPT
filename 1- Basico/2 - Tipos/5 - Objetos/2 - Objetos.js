let pessoa1 = {
    nome: 'ana',
    idade: '23',
    rg: '998878676',
    cpf: '9876564545'
};

let pessoa2 = {
    nome: 'ana',
    idade: '23',
    rg: '998878676',
    cpf: '9876564545',
    endereco:{
        numero: 123,
        bairro: "Centro",
        logradouro: "Rua de Viela"
    }
};

let endereco = {
    numero: 123,
    bairro: "Centro",
    logradouro: "Rua de Viela"
};

let pessoa3 = {
    nome: 'ana',
    idade: '23',
    rg: '998878676',
    cpf: '9876564545',
    endereco: endereco
};

let pessoa4 = {
    nome: 'ana',
    idade: '23',
    rg: '998878676',
    cpf: '9876564545',
    endereco
};


console.log(pessoa1.nome);
console.log(pessoa2.endereco.logradouro);
console.log(pessoa3.endereco.logradouro);
console.log(pessoa4.endereco.logradouro);

