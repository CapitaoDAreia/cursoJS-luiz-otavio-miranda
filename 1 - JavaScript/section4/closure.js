//Perceba que o closure da função anônima dentro de retornaUmaFuncao é exatamente a função retornaUmaFuncao.
//Funções podem acessar além de seu escopo léxico ou closure.
function retornaUmaFuncao(nomepar){
    const nome = nomepar;
    return function(parnome){
        console.log(nomepar)
        console.log(parnome)
    }
}

const umaFuncao = retornaUmaFuncao('Primeiro par');
umaFuncao('Segundo par')