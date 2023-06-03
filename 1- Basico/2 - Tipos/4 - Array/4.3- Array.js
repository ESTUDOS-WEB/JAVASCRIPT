let array1 = [1,2,3];
let array2 = [4,5,6];

//let arrayResultado = array1 + array2; //1,2,34,5,6
let arrayResultado = array1.concat(array2); //[1,2,3,4,5,6]

console.log(arrayResultado);

function filtro(item){
    if(item <= 0){
        return true;
    }else{
        return false;
    }
}


let array3 =  [1, 0, 11, -3, 9, -67];
let numeroNegativos = array3.filter(filtro);
console.log(numeroNegativos);

console.log(numeroNegativos.join(' || '));