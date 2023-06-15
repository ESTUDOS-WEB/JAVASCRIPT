function dividir(dividendo, divisor){
    let resultado = dividendo/divisor
    console.log(1, resultado);
    return resultado;
}

function reject(error){
    console.log(2, error.message);
    return error.message;
}

function resolve(response){
    return response;
}

function divisao(dividendo, divisor){
    return new Promise(function (resolve, reject){
        try{
            let resultado =  dividir(dividendo, divisor);
            // adicionar um erro
            resolve(resultado);
        }catch(error){
            reject(error);
        }
    });
}

divisao(2,3).then(resolve, reject);
divisao('as', '0').then(resolve, reject);