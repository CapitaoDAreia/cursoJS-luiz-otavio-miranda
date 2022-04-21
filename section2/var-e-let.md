# Anotações Section 2
## Diferenças entre VAR e LET

- O primeiro ponto é que nas últimas versões do <strong>ECMAScript</strong> o LET tornou-se uma forma mais clean de declarar variáveis, um recurso mais apropriado, digamos assim.<br>
Quando declaramos uma variável com VAR, nós podemos redeclarar esta mesma, o que não é possível utilizando LET.

## Tipos de Dados Primitivos

- Strings, que correspondem a textos.
- Number, que podem ser tanto inteiros quanto reais (número de ponto flutuante, float).
- Undefined, uma variável que foi declarada mas não foi inicializada. Inicializar uma variável é atribuir a ela um valor. Deixar de atribuir este valor a uma variável declarada faz com que ela não aponte para local nenhum na memória, portanto o seu tipo é indefinido.
- Null, significa nulo e também não aponta para lugar nenhum na memmória. No entanto, nulo e indefinido não são a mesma coisa. O nulo é declarado de forma intencional, já o undefined é a linguagem quem pode ou não definir.
- Boolean. Um tipo com duas possibilidades lógicas de valores, Verdadeiro ou Falso.
- <strong>OBS: UTILIZE 'typeof' PARA SABER O TIPO DE UMA VARÍAVEL</strong>


## Operadores Aritméticos
- Precedência: <br> 
() | Itens em parêntese<br> ** | Potenciação <br> *, / e % | Multiplicação, divisão e módulo<br>+ e - | Adição e subtração

## - Exercício 1 - Receba dois valores com prompt e retorne o resultado da adição destes valores para o usuário com alert.

## - Exercício 2 - Declare e atribua A, B, C. Onde A aponta para o valor de B, B aponta para o valor de C e C aponta para o valor de A.