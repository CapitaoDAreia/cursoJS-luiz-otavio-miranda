//Operação Ternária - Retorno em variável
const pontuacaoUsuario = 1500;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário padrão'
console.log(nivelUsuario)

//Operação Ternária - Retorno em função
function pagaOuNao(eMembro){
    return eMembro ? 'É membro!' : 'Não é membro!'
    // Retorne: eMembro avalia truthy(?) -> 'É membro!' eMembro avalia falsy(:) -> 'Não é membro' 
}
console.log(pagaOuNao(false))
