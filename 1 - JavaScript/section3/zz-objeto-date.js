            //Retorna a data, baseada no Unix Time, conforme parâmetros passados
            //Esses parâmetros podem ser passados em string, conforme segue.
            //Podem ser passados também em milésimos de segundo apartir do Unix Time.

// const data = new Date('2019-04-10 20:15:59.999')
const data = new Date(1651621904120) //Número de milisegundos obtido com a função -Date.now()-
console.log(data)

//Alguns métodos - Para mais, consulte as anotações 
console.log('Dia', data.getDate())
console.log('Mês', data.getMonth())
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Min', data.getMinutes())



