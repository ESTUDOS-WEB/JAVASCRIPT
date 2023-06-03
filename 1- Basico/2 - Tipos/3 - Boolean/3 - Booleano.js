let logado = true;


if(logado){
    console.log("Esta logado!!!"); // Não
}

if('jdjhd'){
    console.log("mensagem 1"); //Sim
}

if(''){
    console.log("mensagem 2"); //Não
}

if(logado ==  0){
    console.log("mensagem 3"); //Sim
}

if(logado == '0'){
    console.log("mensagem 4"); //Sim
}

if(logado ===  ''){
    console.log("mensagem 5"); //Não
}

if(null){
    console.log('Null');
}

if(undefined){
    console.log('undefined');
}

let usuario; //undefined

usuario = {
    nome: 'Ricardo'
}

if(usuario){
    console.log(usuario, 1);
}

if(usuario && logado){
    console.log(usuario, 2);
}

if(undefined > 0){
    console.log('null > 0');
}
