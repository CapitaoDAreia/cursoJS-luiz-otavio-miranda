function A(){
    let valor = 10;
    return function B(){
        let valor = this.valor;
        console.log(valor)
    }
}

const funcao = A();
console.log(funcao())

