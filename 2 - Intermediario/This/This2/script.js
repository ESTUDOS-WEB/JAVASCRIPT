class pessoa {
    constructor(novoNome) {
        this.nome = novoNome;
    }

    imprimir1() {
        console.log(this);
    }
    
    imprimir2 = () => {
        //let self = this;
        function outraFuncao() {
            console.log(self);
        }
        outraFuncao();
    }

    imprimir3 = () => {
        //let self = this;
        setTimeout(function(){ console.log(self)}, 2000)
    }
}

let p = new pessoa('Luna');
p.imprimir1();
p.imprimir2();
p.imprimir3();
