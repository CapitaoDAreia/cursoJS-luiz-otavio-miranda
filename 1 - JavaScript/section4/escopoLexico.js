 //Perceba que a função falanome, mesmo executada dentro de outro escopo, leva em consideração o lugar onde foi declarada e age de acordo com o escopo onde foi declarada.
 const nome = 'Igor';

 function falaNome(){
    console.log(nome);
 }

 function usaFalanome(){
    falaNome()
 }

 usaFalanome()