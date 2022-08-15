console.log("## PRIMEIRO EXEMPLO ##")

const returnOBJ = function(){
    return {
            num1: 1,
            num2: 2,

        processaDados(){
            const num1 = 10
            const num2 = 20
            return num1 + num2 //Se -this.num-, se referirá ao num1 e num2 do objeto retornado. 
        }
    }
}

const OBJ = returnOBJ()
console.log(OBJ.processaDados())

console.log("## SEGUNDO EXEMPLO ##")

const igor = {
    fraseIgor: 'Fala, brother!',

    igorDiz(){
        console.log(this.fraseIgor) //Esse -this- faz referência a uma função do objeto igor
    },

    peso: 89,
    altura: 181,
    idade: 23,
}
igor.igorDiz()

console.log("## TERCEIRO EXEMPLO ##")

const guardaIgor = igor.igorDiz
guardaIgor() //Retorna UNDEFINED, pois o -this- do objeto igor perde a referência quando uma função do objeto igor é guardada dentro de uma variável. 
            //A referência desse -this- passa a ser essa variável

const guardaIgor2 = igor.igorDiz.bind(igor)
guardaIgor2() //Agora sim temos o retorno correto, pois usamos o método BIND para manter a referência da variável que recebe a função do objeto igor no objeto igor