
function Poliedro(nome) {
    this.nome = nome;
};

function Retangulo(x, y) {
    // Poliedro.call(this, 'Retangulo')
    Poliedro.call(this, 'Retangulo')
    this.x = x;
    this.y = y;
}

// let p1 = new Poliedro('Poliedro');
let p1 = new Poliedro('Poliedro');
let r1 = new Retangulo(20,30);

console.log(p1);
console.log(r1);