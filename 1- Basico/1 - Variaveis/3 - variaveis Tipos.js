let nome; // undefined

nome = null; // reserva de memoria para variavel, mais esta vazio

console.log(nome);

//-------------------------------------------------------//

let endereco1 = "Rua joão emanuel";
let endereco2 = "Rua joão emanuel";
let endereco3 = `Rua joão emanuel`;

console.log(typeof endereco1);
console.log(typeof endereco2);
console.log(typeof endereco3);

//-------------------------------------------------------//

let numero1 = 1;

console.log(typeof numero1);

//-------------------------------------------------------//

let estaQuente = true;

console.log(typeof estaQuente);

//-------------------------------------------------------//

let nomes = [
  "Ana",
  "Joao",
  "Arthur",
  "Ana",
  "Joao",
  "Arthur",
  "Ana",
  "Joao",
  "Arthur",
  "Ana",
  "Joao",
  "Arthur",
  "Ana",
  "Joao",
  "Arthur",
  "Joao",
  "Arthur",
  "Ana",
  "Joao",
  "Arthur",
  "Ana",
  "Joao",
  "Arthur",
  "Ana",
  "Joao",
  "Arthur",
  "Ana",
  "Joao",
  "Arthur"
];

console.log(typeof nomes);
console.log(nomes[nomes.length - 1] );


//--------------------------------------------//

let pessoa1 = {
    nome: 'Ana',
    idade: 23,
    print1: function (){
        console.log('Meu nome é ' + this.nome + ', eu tenho ' + this.idade);
    },
    print2:  () => {
        console.log('Meu nome é ' + this.nome + ', eu tenho ' + this.idade);
    }
};

console.log(typeof pessoa1);
console.log(pessoa1['nome']);
console.log(pessoa1['idade']);
pessoa1.print1();
pessoa1.print2();

//---------------------------------------------//

console.log(typeof pessoa1.print1);
console.log(typeof pessoa1.print2);

