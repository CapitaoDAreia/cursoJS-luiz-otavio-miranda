# Anotações Section 3
## Avaliação de Curto Circuito

- Em <b>JavaScript</b> praticamente tudo pode ser avaliado ou em <b>true</b> ou em <b>false</b>.
    - Falsy: False values, valores que avaliam em falso. São eles:
        - False
        - 0
        - '' "" `` strings vazias
        - Null / undefined
        - NaN
    - Qualquer outro valor que for diferente dos checados em falso, serão checados em verdadeiro.

### Operador &&
- Encerra o circuito ao encontrar o primeiro valor falso e o retorna.
### Operador ||
-   Encerra o circuito ao encontrar o primeiro valor verdadeiro, caso não encontre, retorna o valor do último valor falso.