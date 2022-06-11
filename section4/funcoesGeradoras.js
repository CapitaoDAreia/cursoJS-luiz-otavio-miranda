/*
    FUNÇÕES GERADORAS
*/
//Uma função geradora retorna seus valores conforme é chamada, podendo retornar um valor por vez, a cada vez que é chamada

function* soma1(num1, num2){
    num1++;
    yield num1;
    num2++;
    yield num2
}

const funcSoma1 = soma1(10, 11);
console.log(funcSoma1.next().value) //A cada vez que for chamada, retornará o próximo valor
console.log(funcSoma1.next().value)


console.log('### EXEMPLO COM ITERAÇÃO ###')

const funcSoma2 = soma1(10, 11);
for(let valores of funcSoma2){
    console.log(valores)
}