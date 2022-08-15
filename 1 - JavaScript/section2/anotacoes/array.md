# Anotações Section 2
## Sobre Arrays

- Um array é uma variável especial que pode guardar mais de um valor. No caso do JavaScript estes valores podem ser de diversos tipos. Cada um destes valores possuem um endereço dentro do array, que chamamos de índice.
- Sintaxe: let <strong>array</strong> = ["valor1", "valor2", "valor3"]

<hr>

- Adiconar valores ao array:
    - No início dos índices: <strong>array.unshift("valor")</strong>
    - Ao final dos índices: <strong>array.push("valor")</strong>
- Remover valores ao array: 
    - Remover o último índice: <strong>array.pop()</strong>
    - Remover e guardar o último índice: <strong>let removido = array.pop()</strong>
    - Remover o primeiro índice: <strong>array.shift()</strong>
    - Deletar valor e manter índice: <strong>delete array[X]</strong>
- Saber se é um array: <strong>meuArray instanceof Array</strong>
- Para fatiamento, assim como em uma string, utilizamos <strong>slice()</strong>