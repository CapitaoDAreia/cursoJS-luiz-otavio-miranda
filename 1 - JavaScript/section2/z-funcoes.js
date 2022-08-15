//Forma clássica de declarar e usar funções
function soma(x = 0, y = 0){
    let resultado = x + y
    return resultado;
}

function multiplicar(x, y){
    let resultado = y*x
    return resultado;
}
console.log("A soma: ", soma(3))



// Função em variáveis, função anôniima
let raiz = function(n){
    return  n ** 0.5;
};
console.log("A raiz do parâmetro é: ", raiz(9))


//Arrow function
let divisao = (num1, num2) =>{
    return num1/num2;
};
console.log("A divisão do parâmetro é: ", divisao(3, 6))


//Arrow function mais simples ainda
//quando temos somente um parãmetro e somente uma linha na função, podemos escrevê-la da seguinte forma
const multiplicaPorDois = n => n*2

console.log("A multiplicação do parâmetro por 2 é: ", multiplicaPorDois(4))