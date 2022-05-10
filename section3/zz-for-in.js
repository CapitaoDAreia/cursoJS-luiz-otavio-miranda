/*
    FOR IN

*/

//Com um array
const frutas = ['Maçã', 'Manga', 'Goiaba']
for (let i in frutas){
    console.log('Exemplo 1: For in no array - ',frutas[i])
}

//Com um objeto
const carro = {
    modelo: 'Corolla',
    cor: 'Preto',
    ano: 2022,
    placa: 'FRD-4598'
}
console.log('-------------Pulando Linha-------------------')
for(let i in carro){
    console.log('Exemplo 2: For in no objeto - ',i,':', carro[i])
}
//Usando somente a variável do laço de repetição, referimo-nos à chave do objeto
//Usando o nome do objeto e indexando o atributo, referimo-nos as características do objeto
