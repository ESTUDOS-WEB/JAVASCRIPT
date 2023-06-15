class Poliedro {
    constructor(nome){
        this.nome = nome;
    }
};

class Retangulo extends Poliedro {
    constructor(x, y){
        super('Retangulo');
        this.x = x;
        this.y = y;
    }
}

let p1 = new Poliedro('Poliedro');
let r1 = new Retangulo(20,30);

console.log(p1);
console.log(r1);