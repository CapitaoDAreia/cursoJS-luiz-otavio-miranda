// const chamada = function(){
//     return fetch('pessoas.json')
//     .then(resposta =>{
//         return resposta.json()
//     })
//     .then(json =>{
//         iteraSobreJson(json);
//     })
// }

const chamada = function(){
    try{
        axios('pessoas.json')
            .then(resposta=>iteraSobreJson(resposta.data))
    }catch(e){
        console.log(e)
    }
}

function iteraSobreJson(json){
    const resultado = document.querySelector('.resultado');
    for(let elemento of json){ //Jogando elementos iterados na página
        let paragrafo = document.createElement('p');
        paragrafo.innerHTML +="NOME: "+elemento.nome+" | EMAIL: "+elemento.email+" | EMPRESA: "+elemento.empresa;
        resultado.appendChild(paragrafo);
    }
}
