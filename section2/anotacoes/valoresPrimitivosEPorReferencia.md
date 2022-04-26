# Anotações Section 2
## Sobre Valores Primitivos e Por Referência

- Valores primitivos são inerentes a <strong>strings, numbers, booleans, undefined e null</strong>.
- Valores por referência são inerentes a <strong>arrays, objects e functions</strong>
- Para entender melhor:
    - Se você determinar que o valor da variável Um = 'A' e que o valor da variável Dois = Um, o que acontece é que uma cópia do valor de Um foi feita para o valor de Dois. Alterar o valor de Dois não afeta Um.
    - No entanto, se você fizer o mesmo, só que com arrays, funções ou objetos, os valores serão afetados, pois se tratando desses três casos, os valores são passados por referência.
    - Para evitar esse comportamento podemos usar o spread, representado por três pontos(...).