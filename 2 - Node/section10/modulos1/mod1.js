const nome = 'Igor';
const sobrenome = 'Silva';
const falaNome = (nome, sobrenome)=>{
    console.log(`Eu sou o ${nome} ${sobrenome}`)
};

// module.exports.falaNome = falaNome;
// console.log(module.exports)

exports.falaNome = falaNome;
exports.nome = nome;
console.log(exports)