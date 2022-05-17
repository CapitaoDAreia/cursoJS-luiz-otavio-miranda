const paragrafo = document.querySelector('body section div p');
function mostraHoraExata(){
    let datas = new Date() 
    return datas.toLocaleTimeString('pt-br', {
        hour12: false
    })
}
setInterval(function(){
    paragrafo.innerHTML =  `${mostraHoraExata()}`
    if(paragrafo.style.color == "red"){
        paragrafo.style.color = "black"
    }else{
        paragrafo.style.color = "red"
    }
}, 1000)


