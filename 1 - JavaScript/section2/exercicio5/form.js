let arrayObjetosNomes = []
let form1 = document.getElementById('form-01');
let resultado = document.getElementById('realizacao');
let contador = 0;

/*
Essa função cria um objeto com os valores passados nos atributos.
Os valores coletados pelos atributos serão as características do meu objeto.
*/
function objetoAdicionaPessoas(valor1, valor2, valor3, valor4) {
    return {
        nome: valor1,
        sobrenome: valor2,
        peso: valor3,
        altura: valor4
    }
}

function passaResultado(){
    
    resultado.innerHTML += `${arrayObjetosNomes[contador].nome} ${arrayObjetosNomes[contador].sobrenome}, ${arrayObjetosNomes[contador].peso} KG, ${arrayObjetosNomes[contador].altura} cm de altura.  </br>`
    contador ++
}

function resetaForm(){
    for(let i=0;i <= 4;i++){
        form1[i].value = ""
    }
}

form1.addEventListener('submit', function(event){
    event.preventDefault()//Prevenindo comportamento padrão do evento 

    /*
        Empurrando para dentro do meu ArrayObjetosNomes o retorno da minha função objetoAdicionaPessoas
        Os valores serão retornados com base nos parâmetros passados, que por sua vez são os valores
        do formulário
    */
    arrayObjetosNomes.push(objetoAdicionaPessoas(form1[0].value, form1[1].value, form1[2].value, form1[3].value, form1[4].value))
    
    //Chama função que passa o resultado na tela
    passaResultado()
    //Chama função que reseta o formulário
    resetaForm()
})

