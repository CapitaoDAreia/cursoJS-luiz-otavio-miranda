/*
    AJAX - é o acrônimo para JavaScript Assíncrono + XML.
    Não se trata exatamente de uma tecnologia nova, mas um termo empregado em 2005 por JJ Garret
    para descrever uma nova forma de utilizar em conjunto algumas tecnologias, como HTML, XHTML,
    CSS, JavaScript, XML, o objeto XMLHttpRequest...

    Quando essas tecnologias são combinadas no modelo AJAX, as aplicações web que a utilizam são
    capazes de fazer rapidamente atualizações incrementais para a interface do usuário sem recarregar
    a página inteira do navegador. Isso torna a aplicação mais rápida e sensível às ações do usuário.

    Vamos ver na prática.
*/

//Exemplo 1
function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("demo").innerHTML = this.responseText;
      }
    xhttp.open("GET", "AJAX2.html", true);
    xhttp.send();
}

//Exemplo 2 - COM PROMISES
const request = (obj) =>{
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener('load', ()=>{
      if(xhr.status >= 200 && xhr.status < 300) resolve(xhr.responseText);
      reject(xhr.statusText);
    })
  })
}

document.addEventListener('click', e=>{
  const el = e.target;
  const tag = el.tagName.toLowerCase();
  console.log(el)
  if(tag === 'a'){
    e.preventDefault();
    carregaPagina(el);
  }
});

function carregaPagina(el){
  const href = el.getAttribute('href');

  const objConfig = {
    method: 'GET',
    url: href,
  }
  request(objConfig).then(response => {
    carregaResultado(response);
  }).catch(error => console.log(error))
}

function carregaResultado(response){
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}

