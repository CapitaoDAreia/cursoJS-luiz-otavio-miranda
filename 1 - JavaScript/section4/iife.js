//IIFE - Immediately invoked function expression

//É uma função que é declarada e imediatamente chamade a não possui nome, portanto, não "toca" o escopo global.
(function(){
    const nome = 'Igor';
    console.log(nome)
})();

const nome = 'Daniel';
console.log(nome);

//Segundo exemplo
//Também é possível passar parâmetros nos parênteses de execução imediata, recebê-los na função e trabalhar com eles
(function(par1, par2, par3){
    function mostraParametros() {
        console.log(par1, par2, par3)
    }
    mostraParametros()
})(20, 30, 40);