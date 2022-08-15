# Anotações Section 3
## Atribuição via desestruturação - Array

- Atribuir significa dar um valor a uma variável.

- Desfragmentar um Array significa jogar cada um dos índices em outras variáveis. 

- A atribuição por desfragmentação é o ato de jogar os índices de um array dentro de variáveis.

- Esse esquema pode ser feito por meio de uma estrutura até muito simples: </br>
<code>
    let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90] </br>
    let [primeiro, segundo, terceiro, quarto, ...etc] = numeros </br>
    console.log('Saída exemplo 2:', primeiro, segundo, terceiro, etc)
</code>

- Perceba que na primeira linha de código eu estou declarando o meu array, já com os seus valores indexados.
- Na segunda linha o que acontece? As variáveis são declaradas entre colchetes para receber os valores do meu array, sendo respeitada a ordem dos índices.
- Na última linha nós podemos visualizar o resultado da desestruturação.

</hr>

### OBS: É importante ressaltar que, se eu declaro as variáveis recebedoras entre os colchetes com let, todas serão let. Se com const, todas serão const e assim sucessivamente. 

### '...' esse operador, neste caso, chama-se rest

