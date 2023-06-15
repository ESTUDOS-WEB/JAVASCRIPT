function Poliedro(nome) {
    
    let nome = nome;
    
    let imprimir = () => console.log(this);
    
    return this;
};

function Retangulo(x, y) {
    
    let x = x;
    let y = y;

    let poliedro = new Poliedro();
    this.nome = 'Retangulo';
    
    let imprimir = () => console.log(this);
    
    return this;
}


let p1 = new Poliedro();

p1.imprimir();

let r1 = new Retangulo(20,30);

r1.imprimir();