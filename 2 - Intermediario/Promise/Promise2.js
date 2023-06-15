function fnSucesso(msg) {
    console.log(msg);
}

function fnErro(erro) {
    console.error(erro);
}

function funcaoAssincrona(dados) {
    return new Promise(function (resolve, reject) {
        if (dados) {
            resolve('Retorna os dados!');
        } else {
            reject('Deu erro!');
        }
    });
};

funcaoAssincrona('dados')
    .then(fnSucesso,fnErro)
    .catch((e) => console.log(e.message));
    
funcaoAssincrona()
    .then(fnSucesso,fnErro)
    .catch((e) => console.log(e.message));