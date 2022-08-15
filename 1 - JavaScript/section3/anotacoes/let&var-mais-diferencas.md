# Anotações Section 3
## Mais diferenças entre Var e Let

- Let tem escopo de bloco, ou seja, entre chaves. { ... bloco}
- Var tem escopo de função, somente.
- Var sofre elevação na declaração de variáveis, ou <b>hoisting</b>:
    - Esse é um fenômeno onde o interpretador move a declaração de funções e Vars para o topo do código. Somente é movida a declaração, a atribuição de valor não.