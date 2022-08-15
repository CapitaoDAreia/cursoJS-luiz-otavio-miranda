# Anotações Section 3
## Objeto Date

- Trata-se de uma função construtora. É um objeto que nos auxilia no tratamento de unidades de medida de tempo.
- É baseado no <strong>UNIX TIME</strong>: Ver depois.

<br>

- Para instanciar a classe com data e hora determinada, devem ser passados parâmetros. Existem varias maneiras de criar, como apresentadas a seguir:
    - new Date(milissegundos)
    - new Date(string_de_data)
    - new Date(ano, mes, dia)
    - new Date(ano, mes, dia, hora, minuto, segundo, milissegundo)
    - Mandeira alternativa, utilizando uma string: new Date("Jan 1, 2000 00:00:00")

<hr>

- Dos métodos:
    - getDate(): devolve o dia do mês, um inteiro entre 1 e 31. Não confundir com getDay que retorna o dia da semana.
    - getDay() : devolve o dia da semana, inteiro entre 0 e 6 (0 para Domingo).
    - getHours(): retorna a hora, inteiro entre 0 e 23.
    - getMinutes(): devolve os minutos, inteiro entre 0 e 59.
    - getSeconds(): devolve os segundos, inteiro entre 0 e 59.
    - getMonth(): devolve o mês, um inteiro entre 0 e 11 (0 para Janeiro).
    - getTime(): devolve os segundos transcorridos entre o dia 1 de janeiro de 1970 e a data correspondente ao objeto ao que se passa a mensagem.
    - getYear(): retorna o ano, os últimos dois números do ano. Por exemplo, para o 2006 retorna 06. Este método   está obsoleto em Netscape a partir da versão 1.3 de Javascript e agora se utiliza getFullYear().
    - getFullYear(): retorna o ano com todos os dígitos. Funciona com datas posteriores ao ano 2000.
    - setDate(d): atualiza o dia do mês.
    - setHours(h): atualiza a hora.
    - setMinutes(m): muda os minutos.
    - setMonth(m): muda o mês (atenção ao mês que começa por 0).
    - setSeconds(s): muda os segundos.
    - setTime(t): atualiza a data completa. Recebe um número de segundos desde 1 de janeiro de 1970.
    - setYear(y): Muda o ano, recebe um número, ao que lhe soma 1900 antes de colocá-lo como ano data. Por exemplo, se receber 95 colocará o ano 1995. Este método está obsoleto a partir de Javascript 1.3 em Netscape.    Agora se utiliza setFullYear(), indicando o ano com todos os dígitos.
    - setFullYear(): muda o ano da data ao número que recebe por parâmetro. O número se indica completo ex: 2005   ou 1995. Utilizar este método para estar certo de que tudo funciona para datas posteriores a 2000.
    - getimezoneOffset(): Devolva a diferença entre a hora local e a hora GMT (Greenwich, UK Mean Time) sob a  forma de um inteiro representando o número de minutos (e não em horas).
    - toGMTString(): devolva o valor do atual em hora GMT (Greenwich Mean Time)
