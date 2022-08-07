import { mudaCor } from "./modulo1";

const result = document.querySelector('.result')
document.addEventListener('click', (e)=>{
    if(e.target.classList.contains('title')){
        result.innerText = "Você clicou no título";
        mudaCor(document.body, 'grey');
    }else{
        result.innerText = "Você clicou em outro lugar";
        mudaCor(document.body, 'white');
    }
 
});

