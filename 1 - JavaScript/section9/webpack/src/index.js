const result = document.querySelector('.result')
document.addEventListener('click', (e)=>{
    if(e.target.classList.contains('title')){
        result.innerText = "Você clicou no título";
    }else{
        result.innerText = "Você clicou em outro lugar";
    }
 
});

