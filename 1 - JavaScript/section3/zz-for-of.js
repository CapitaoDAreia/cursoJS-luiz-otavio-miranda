/*
    FOR OF
*/

//Exemplo com array
const notas = [100, 80, 90, 20, 40, 50]

for(let i of notas){
    console.log(i)
}
//Perceba que essa estrutura retorna, de maneira mais fácil, os valores dos índices do array.

console.log('----------Pulando Linha---------')
console.log('Função forEach:')
//Há ainda uma função muito interessante chamada forEach
const nomes = ['Igor', 'Daniel', 'Hugo', 'stoso']
 nomes.forEach(function(elemento){
     console.log(elemento)
 })