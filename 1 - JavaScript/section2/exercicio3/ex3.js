let nome = prompt("Digite o seu nome completo:")
section = document.querySelector('body > section')

if(nome != null){
    section.innerHTML = `O seu nome é ${nome}<br>`

    section.innerHTML += `O seu nome tem ${nome.length} letras<br>`

    section.innerHTML += `A segunda letra do seu nome é ${nome.charAt(1)} <br>` //A notação de colchete poderia ter sido utilizada nome[1]

    section.innerHTML += `O primeiro índice da letra D é o ${nome.indexOf('D')}<br>`

    section.innerHTML += `O último índice da letra a é o ${nome.lastIndexOf('a')}<br>`

    section.innerHTML += `As últimas três letras do seunome são: ${nome.slice(17, 20)}<br>` //Poderia ter sido utilizado o parâmetro slice(-3) ou slice(-3, nome.lenght)

    section.innerHTML += `As palavras do seu nome são ${nome.split(' ')}<br>`

    section.innerHTML += `Seu nome com letras maiúsculas: ${nome.toLocaleUpperCase()}<br>`

    section.innerHTML += `Seu nome com letras minúsculas: ${nome.toLocaleLowerCase()}<br>`
}else if(nome == null){
    alert("Você precisa informar o seu nome")
    window.location.reload()
}

