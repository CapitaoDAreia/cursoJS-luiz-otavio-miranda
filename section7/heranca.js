/*
    HERANÇA
    Em Javascript, classes são maneiras de descrever objetos e suas propriedades. Tendo isso em mente,
    heranças se aplicam no relacionamento de objetos, onde objetos filhos herdam características de objetos pai.
    Lembra dos protótipos? Pois é, é exatamente isso. Só que com uma abordagem sintáxica diferente.

    Abaixo há um exemplo prático onde objetos gerados herdam as funcionalidades e caractarísticas de seu gerador.

    Pensar em herança, neste caso, é o mesmo que pensar em herança na vida real.

    Filhos herdam de pais.
    Filhos compartilham da mesma herança.
    Pais não herdam de filhos.
    Filhos não herdam de filhos. 
*/

//Classe Pai geradora
class DispositivoEletronico {
    constructor(nome, marca) {
        this.nome = nome;
        this.marca = marca;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado === true) return 'Já ligado.'
        this.ligado = true;
        return 'Ligando Dispositivo';
    }

    desligar(){
        if(this.ligado !== true) return 'Já desligado.'
        this.ligado = false;
        return 'Desligando Dispositivo';

    }
}


//Classe derivada filho 1
class Smartphone extends DispositivoEletronico{
    constructor(nome, marca, modelo, cor){
        super(nome, marca);
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
    }
}
const celular1 = new Smartphone('Smartphone', 'Xiaomi', 'Mia2Lite', 'Preto');

//Classe derivada filho 2
class Computador extends DispositivoEletronico{
    constructor(nome, marca, modelo, cor){
        super(nome, marca)
        this.modelo = modelo;
        this.cor = cor;
    }
}
const computador1 = new Computador('Computador', 'Dell', 'Latitude', 'Preto');

console.log(computador1)
console.log(computador1.ligar())

/*
            EXPLICANDO O QUE FOI FEITO

            Declaramos uma classe (objeto) e apartir dela descemos para classes mais específicas, geradas apartir dela.

            Dispositivos Eletrônicos    > Smartphones
                                        > Computador
            
            O conceito de herança se aplica aqui, onde os computadores e smartphones herdam características inerentes a dispositivos eletrônicos e
            são criados apartir do construtor Dispositivos Eletrônicos.

            Usamos o termo extends para referenciar a classe pai e invocamos ela, junto com os seus parâmetros dentro do constructor.
            É mais ou menos a mesma coisa que fazemos com as constructor, quando utilizamos call para invocar a função pai dentro do filho, só
            que de uma forma mais simples, pos nessa abordagem sintáxica o JS executa boa parte do trabalho que teríamos que executar de forma automática.
*/




