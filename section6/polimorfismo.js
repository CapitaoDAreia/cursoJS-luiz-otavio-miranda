/*
    POLIMORFISMO 

    Em javascript, polimorfismo é basicamente a sobrescrita de métodos em classes filhas de um mesmo pai.
    Ou seja, para exemplificar, considere que duas classes, A e B, são filhas de uma classe X. Sabendo que classes
    em JS são na verdade funções construtoras, ou, objetos de primeira classe.

    Agora, como A e B são filhas de X, estão prototipadas em X e têm X como seu constructor.
    Assim, conforme o jogo de heranças e prototypes, as classes A e B herdam as propriedades de X.

    No entanto, essas propriedades herdadas podem ser sobrescritas considerando as particularidades e especificidades de A e B, e 
    a isso damos o nome de polimorfismo, que no caso do JS é mais específico considerar Polimorfismo de Sobrescrição

        Classes - Em Javascript, classes são o equivalente a funções construtoras.
        Javascript é uma linguagem baseada em cadeias de protótipos que incidem sobre objetos,
        portanto, o que parecem ser e são tratadas como classes, são meramente objetos que
        possuem vínculos e compartilham métodos.

*/

/*
    EXEMPLO INICIAL
    Antes de tudo, vejamos um exemplo de uma classe:
*/
console.log('## EXEMPLO COM CONTA 1: ##')
console.log(' ')

function Conta(titular, agencia, conta, saldo){
    this.titular = titular,
    this.agencia = agencia,
    this.conta = conta,
    this.saldo = saldo
    Object.defineProperty(this, 'titular', {
        configurable: false,
        enumerable: true,
    })
}
Conta.prototype.getSaldo = function(){
    return `Ag: ${this.agencia} | Conta: ${this.conta} | Saldo: R$ ${this.saldo},00`
}
Conta.prototype.sacar = function(valor){
    if(valor > this.saldo){
        return "Saldo insuficiente | Saldo: R$ "+this.saldo+",00";
    }

    this.saldo -= valor;
    return "Saque de R$ "+valor+",00 realizado com sucesso. Saldo atual: R$"+this.saldo+",00";
}
Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    return "Seu saldo agora é de R$ "+this.saldo+",00"
}
const conta1 = new Conta('Igor Silva', '82', '19336', 0);
console.log(conta1.depositar(20))
console.log(conta1.sacar(10))
console.log(conta1.getSaldo())

/*
    EXEMPLO COM UM FILHO DO EXEMPLO INICIAL
    Agora, vamos gerar outra classe apartir da classe Conta, sobrescrevendo um método de acordo com o objetivo da classe.
*/
console.log(' ')
console.log('## EXEMPLO COM CONTA 2: ##')
function ContaCorrente(titular, agencia, conta, saldo, limite){ //Criando classe ContaCorrente invocando outro objeto (Conta) dentro dela
    Conta.call(this, titular, agencia, conta, saldo),
    this.limite = limite
}
ContaCorrente.prototype = Object.create(Conta.prototype); //Definindo o prototype de ContaCorrente para que as heranças sejam aplicadas
ContaCorrente.prototype.constructor = ContaCorrente; //Definindo o construtor de ContaCorrente para ela mesma. Necessário neste caso.

ContaCorrente.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)){
        return "Saldo insuficiente | Saldo: R$ "+this.saldo+",00";
    }

    this.saldo -= valor;
    return "Saque de R$ "+valor+",00 realizado com sucesso. Saldo atual: R$"+this.saldo+",00";
}
                    /*
                        O que acontece acima:
                        Sobrescrevemos uma propriedade herdada, a propriedade sacar, para se adequar ao tipo de conta, o tipo de classe.
                        Neste caso, para sacar, é considerado também um limite, que seria o valor que pode estar negativo na conta do sujeito.
                        Isso caracteriza um saque na conta corrente, diferente de uma simples conta.

                        Percebe a diferença entre as duas classes, mesmo que as duas tenham herdado as mesmas propriedades?
                    */

const conta2 = new ContaCorrente('Igor', '17', '19337', 0, 100);
console.log(conta2.depositar(10))
console.log(conta2.getSaldo())
console.log(conta2.sacar(100))


/*
    EXEMPLO COM OUTRO FILHO DO EXEMPLO INICIAL
    Veja que, neste caso, temos uma conta poupança.
    Não podemos efetuar saque utilizando limites, embora essa classe seja uma classe-filha da mesma que a Conta Corrente, e na
    Conta Corrente nós possamos fazer isso.

*/
console.log(' ')
console.log('## EXEMPLO COM CONTA 3: ##')
function ContaPoupanca(titular, agencia, conta, saldo){ //Criando classe ContaCorrente invocando outro objeto (Conta) dentro dela
    Conta.call(this, titular, agencia, conta, saldo)
}
ContaPoupanca.prototype = Object.create(Conta.prototype); 
ContaPoupanca.prototype.constructor = ContaPoupanca; 

const conta3 = new ContaPoupanca('Kawany', '344', '987', 0);
console.log(conta3.getSaldo())
console.log(conta3.depositar(10))
console.log(conta3.sacar(20))



