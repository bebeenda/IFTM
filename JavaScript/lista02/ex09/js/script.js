
vetorNomes = [];
vetorQtdade = [];


qtdade = parseInt(prompt("Informe a quantidade de nome que deseja sortear")); //converter para numeros inteiros
vetorQtdade.push(qtdade); //um vetor para adicionar a quantidade de nomes que o usuário deseja sortear

i = 1; //para o indice dos nomes começar em 1
while(i <= qtdade)
{
    nome = prompt(`Informe o ${i}º nome que deseja sortear`);
    vetorNomes.push(nome);
    i++
}

if(qtdade > vetorNomes.length)
{
 alert("Quantidade maior que o número de nomes disponíveis")
}

else
{
    document.write(`<div style = "background-color:rgba(175, 180, 185, 1)">`);
    
    for(i = 0; i < qtdade; i++)
    {
        indiceVetor = Math.floor(Math.random()*vetorNomes.length)
        nomeSorteado = vetorNomes[indiceVetor]
        document.write(`<p style ="border-bottom:2px solid; padding: 5px"> ${i + 1}º - ${nomeSorteado}</p>`);
        vetorNomes.splice(indiceVetor, 1); //para ir retirando os nomes que ja foram sortedos
    }
    
    document.write("</div>");
    
}









