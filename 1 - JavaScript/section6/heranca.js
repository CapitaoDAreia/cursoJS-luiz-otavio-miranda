/*
    HERANÇA

    Em Javascript, o modelo de herança incide somente sobre objetos e acontecem através dos prototypes.
    Um objeto possui em si um link interno que aponta para outro objeto (prototype). Esse prototype, por sua vez,
    possui um link interno que aponta para outro objeto e assim temos uma cadeia de prototypes onde o conceito de
    herança se instala, e assim é no Javascript. 
*/

/*
    1 - Exemplificando:

    - Criando um objeto(função) Animal
    - Prototypando neste objeto uma propriedade(função)
    - Criando um novo objeto Lobo, a partir do objeto Animal

    *Perceba que o Objeto lobo herdou o prototype do objeto animal*
*/


function Animal(nome, tipo, alimento){
    this.nome = nome;
    this.tipo = tipo;
    this.alimento = alimento;
}
Animal.prototype.animalCome = function(){
    return this.nome+" come "+this.alimento;
}
const lobo = new Animal('Lobo', 'Canídeo', 'carne')

/*
    2 - Exemplificando
    - Criando uma função Felino apartir da função Animal utilizando o método .CALL
        Esse método permite chamar métodos de um objeto em outro objeto, que é especificado
        no primeiro argumento. Como neste caso foi referenciado o this, serão executados
        os métodos de Animal em Felino(this).
        
    - Prototypa a função felino com um método acao

    - Muda o prototype de Felino para Animal

    - Muda o construtor de Felino para Felino, pois como Felino foi criado como os métodos de Felino 
    são um .call de Animal, o construtor até então era Animal.

    - Cria um objeto onca utilizando Felino e imprime métodos de Animal em Felino.

    *Perceba que a função Felino herdou atributos da função Animal*
    *Perceba que, utilizando o método call, para esse jogo de heranças ser possível, precisamos manipular o prototype e construtor da função Felino*
    
*/

function Felino(nome, tipo, alimento){
    Animal.call(this, nome, tipo, alimento)
    
}
Felino.prototype.acao = function(){ //Só funcionará se o prototype de Felino não for alterado abaixo
    return this.nome+" ronronea";
}

Felino.prototype = Object.create(Animal.prototype); //Muda o prototype de Felino para Animal
Felino.prototype.constructor = Felino;

const onca = new Felino('Onça', 'Felino', 'carne');

console.log(onca.animalCome())
