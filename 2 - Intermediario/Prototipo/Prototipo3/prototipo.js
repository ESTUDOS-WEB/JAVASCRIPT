
function Poliedro(nome) {

    this.nome = nome;
    this.imprimir = () => console.log(this);

    return this;
};

function Retangulo(x, y) {

    this.x = x;
    this.y = y;
    this.poliedro = new Poliedro('Retangulo');

    this.imprimir = () => console.log(this);

    return this;
}


let p1 = new Poliedro('NOme');

console.log( p1);

let r1 = new Retangulo(20,30);

r1.imprimir();