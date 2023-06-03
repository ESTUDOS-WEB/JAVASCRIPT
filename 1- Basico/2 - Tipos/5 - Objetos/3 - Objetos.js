let carro1 = {
    modelo: 'Fiat',
    ano: 2002,
    consumoPorLitro: 16
};


let carro2 = carro1;


carro2.ano = 2999;

console.log(carro1);
console.log(carro2);