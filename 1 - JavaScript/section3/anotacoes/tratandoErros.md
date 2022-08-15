# Anotações Section 3
## Try - Catch - Throw
<hr>

### Try - Catch 

A declaração <b>Try...Catch</b> é composta por dois blocos. O bloco <b>try</b> é responsável por rodar o código.
Se este código retornar algum erro, o bloco <b>catch será rodado.</b>
- Exemplo: </br>
<code>
    try {                                                                      <br>
  nonExistentFunction();                                                       <br>
} catch (error) {                                                              <br>
  console.log(error);                                                          <br>
}
</code>

Perceba que no bloco catch existe um comando que envia a saída para o console com base no parâmetro da delcaração <b>catch</b>. Não é uma boa prática enviar o erro diretamente para o usuário, isso acontece apenas para fim de teste

<hr>

### Throw

A declaração <b>Throw</b> é utilizada pelo desenvolvedor para definir exceptions e lançar erros. Toda a declaração depois do <b>Throw</b> não será executada. 
- Exemplo:
<code>
    function soma(x, y){<br>
        if(typeof x !== 'number' || typeof y !== 'number'){<br>
            throw new ReferenceError('x e y precisam ser números');<br>
        }<br>
        return x + y;<br>
    } 
</code>