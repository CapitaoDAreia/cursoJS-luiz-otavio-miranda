const div = document.querySelector('.paragrafos');
const paragrafos = div.querySelectorAll('p');
const button = document.querySelector('body > section > button')

//PEGAR QUALQUER PROPRIEDADE CSS COMPUTADA DE FORMA DINÂMICA
//Neste caso peguei a cor de fundo do Body
let estilosBody = getComputedStyle(document.body);
const cordefundo = estilosBody.backgroundColor;

button.addEventListener('click', function(e){
    e.stopPropagation()
    e.preventDefault()

    if(paragrafos[0].style.backgroundColor !== 'rgb(6, 94, 94)'){
        for(let pes of paragrafos){
            pes.classList.add('dinamic-p')
            pes.style.backgroundColor = cordefundo;
        }
    }else{
        for(let pes of paragrafos){
            pes.classList.remove('dinamic-p')
            pes.style.backgroundColor = '#EEEEEE';
        }
    }
})
