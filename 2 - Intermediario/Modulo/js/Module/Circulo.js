export function Circulo (raio){
    
    this.raio = raio;
    
    this.area =  function (){
        return Math.PI * 2 * this.raio;
    }

    this.perimetro = function (){
        return 2 * this.raio;
    }

    return this;
}
