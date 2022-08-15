/*
    FUNÇÕES RECURSIVAS
*/
//A recursividade é o ato de chamar uma função dentro dela mesma.
let num = 0;
function contaNumeros(max=10) {
    console.log(num)
    num++;
    if(num <= max) contaNumeros(max) //Perceba que, obedecendo uma condição, a função é chamada dentro dela mesma.
}

contaNumeros(20)