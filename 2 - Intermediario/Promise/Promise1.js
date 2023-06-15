function funcaoSucesso(){
    console.log('Retorna os dados!');
}

function funcaoErro(erro){
    console.error('Retorna um erro!');
}

function funcaoAssincrona(dados, fnSucesso, fnErro){
    if(dados){
        fnSucesso();
    }else{
        fnErro();
    }
}

funcaoAssincrona('dados', funcaoSucesso, funcaoErro);
funcaoAssincrona(undefined, funcaoSucesso, funcaoErro);