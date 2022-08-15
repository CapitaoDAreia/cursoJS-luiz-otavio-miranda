/*
    OBJETO MAP
    O objeto map é uma estrutura de dados que incide sobre objetos. Esse objeto contém pares de chave-valor
    e lembra a ordem original da inserção das chaves, útil em algoritmos onde a ordem dos valores é importante
    e precisa ser conservada. Qualquer valor pode ser usado como chave ou valor.

*/

//Exemplo de objeto por uma API

const pessoas = [
    {id: 3, nome: 'Igor'},
    {id: 2, nome: 'Kawany'},
    {id: 1, nome: 'Rhavi'},
]

//Exemplo de manipulação de objetos com Map
const novasPessoas = new Map();

for(let pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa});
}
/*
    Acima, criamos um Map e iteramos sobre o array recebido pela API
    enviando para o Map as informações contidas no array recebido.

    O Map recebe o id e logo os objetos contidos no array, preservando assim a ordem
    dos objetos e suas respectivas chaves, exatamente como recebido pela API.
*/
console.log(novasPessoas)
