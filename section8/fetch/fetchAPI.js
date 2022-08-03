/*
    Fetch API - fornece uma interface para buscar recursos, de forma semelhante ao funcionamento do
    XMLHttpRequest. No entanto, fetch oferece um conjunto de recursos mais poderosos e flexíveis,
    além de ser mais simples e menos verboso.
*/

//Exemplo 1 - Veja no console
fetch('AJAX2.html1') //requisita uma página que nós não temos disponível
    .then(resposta => {
        if (resposta.status !== 200) throw new Error('EX1: ERRO AO PROCURAR PÁGINA'); //esse throw vai direto para o catch
        return resposta.text(); //esse return vai direto para o then
    })
    .then(html => console.log(html)) //recebemos o retorno como 'html' e logamos
    .catch(e => console.error(e))




//Exemplo 2 - veja na página

//Ouvindo os ciques na página
document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

//Efetua o carregamento da página, de forma assíncrona, usando fetch para requerir e devolver.
async function carregaPagina(el){
    try{
        const href = el.getAttribute('href');
        const response = await fetch(href);

        if(response.status !== 200) throw new Error('#ERRO 404!')
        
        const html = await response.text();
        carregaResultado(html);
    }catch(e){
        console.error(e)
    }
}

//Joga página recebida dentro de um bloco na página principal
function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}