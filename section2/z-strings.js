/*
    Falando sobre strings e testando  funções relacionadas
 */

let string1 = "Fala, broaather!"
let string2 = "Como é que tá?"
let string3 = "Falô, falô!"

let result = string1.charAt(1) //traz o caractere no range especificado, neste caso range 1

    result = string2.length //traz o tamanho da string, a quantidade de caracteres que essa string possui

    result = string3.indexOf('falô', 4) //traz o range do caractere expecificado, caso não encontre o resultado será -1 || depois da virgula, nos parâmetros, especificamos o ponto de partida da busca

    result = string2.lastIndexOf('é') //Faz o mesmo que INDEXOF, começando da última posição da string

    result = string1.match(/[a-z]/g)// faz uma busca na string com expressões regulares

    result = string1.replace(/a/g, 'X') //Substitui palavras ou caracteres, podemos utilizar Regex || O primeiro valor no parâmetro é o procurado, o segundo, o encontrado

    result = string1.length // Não é uma função, mas retorna todos os caracteres da string

    result = string1.slice(0, 4) //retorna, com base em início e fim de range passados como parâmetro, os caracteres entre os parãmetros passados || Com somente um parâmetro negativo a contagem começa de traz para frente 

    result = string2.split(' ', 2)//Divide a string no caracter especificado como parâmetro || O segundo parâmetro determina a quantidade de vezes que a divisão acontecerá
    
console.log(result)