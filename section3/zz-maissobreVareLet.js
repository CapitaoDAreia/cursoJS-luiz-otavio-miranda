//let tem escopo de bloco
let variavel1 = 'Igor'

if(!0){
    let variavel1 = 'Daniel'
    console.log(variavel1)
}


//var tem escopo de função, somente.
var variavel2 = 'Silva'
if(!0){
    var variavel2 = 'Igor'
    console.log(variavel2)
}
