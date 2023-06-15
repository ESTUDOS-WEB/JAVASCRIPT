import { Circulo } from "./Module/Circulo.js";
import { multiplicacao, soma } from "./Module/Calculadora.js"

let c1 = new Circulo(10);

console.log(c1.raio);
console.log(c1.perimetro());
console.log(c1.area());

console.log(multiplicacao(2,6));
console.log(soma(2,6));
console.log(soma(100));
