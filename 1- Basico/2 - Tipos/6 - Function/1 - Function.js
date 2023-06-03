function soma1 (numero1, numero2) {
    return numero1 + numero2;
};


let soma2 = function (numero1, numero2) {
    return numero1 + numero2;
};

let soma3 = (numero1, numero2) => {
    return numero1 + numero2;
}

let soma4 = (numero1, numero2) => numero1 + numero2;


console.log(typeof soma1);
console.log(soma1(3, 7));

console.log(typeof soma2);
console.log(soma2(3, 7));

console.log(typeof soma3);
console.log(soma3(3, 7));

console.log(typeof soma4);
console.log(soma4(3, 7));