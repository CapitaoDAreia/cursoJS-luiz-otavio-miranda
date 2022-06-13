/*
    MÉTODO SPLICE
*/
/*
    ARGUMENTOS:
    nomes.splice(índice, delete, elem1, elem2, elem3);
    índices - é o índice do elemento onde começaremos a operação
    delete - é o número de elementos que deletaremos apartir do índice
    elem1, 2, 3 - elementos que serão adicionados apartir do índice e no lugar do deletado

*/


//índices negativos        -4       -3      -2        -1
//índices                   0        1       2         3
const nomes = new Array('Kawany', 'Igor', 'Rhavi', 'Lunna');
const adicionado = 'Adicionado';
console.log('Array original:', nomes)

console.log('################################################ ')

//Adicionar elementos ao final do array
nomes.splice(nomes.length, 0, adicionado)
//Utilizando o nome total do array como índice de início, excluindo zero elementos e passando os valores desejados
console.log('Adicionando mais elementos ao final:', nomes)

console.log('################################################ ')

//Removendo elementos do final do array
nomes.splice(-1, 1) 
//Inicio a operação do último elemento e excluo um elemento
console.log('Removendo um elementos do final:', nomes)

console.log('################################################ ')

//Adicionando elementos no início
nomes.splice(0, 0, adicionado) //Referencio o primeiro índice do array, para começar nele, deleto nenhum e passo o meu parâmetro de adição
console.log('Adicionando elementos no início do array:', nomes)


//Teste
console.log('################################################ ')
nomes.splice(2, 1)
console.log(nomes)
