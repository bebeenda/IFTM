var vetorNomes = [];
var vetorIdades = [];

i = 1 // para pegar o indice de cada passageiro

while(true)
{
    nome = prompt(`Informe o nome do ${i} passageiro`);

    vetorNomes.push(nome); //um vetor para adicionar os nomes conforme o usuário for passando

    idade = prompt(`Informe a idade do passageiro ${i}`)

    vetorIdades.push(idade); 

    parar = prompt(`Deseja informar mais nomes? Digite S ou N`);

    if(parar == "N")
    {
        break;
    }

    i++; //para encrementar o número de passageiros

}

//Calcular a média da idade dos passageiros

soma = 0;
for(i = 0; i < vetorIdades.length; i++)
{
   soma = soma + parseInt(vetorIdades[i]);  //soma das idades, passando para inteiros 
}

//média das idades

media = soma / vetorIdades.length;

//arredondar para 2 casas decimais
media = media.toFixed(2);

document.write(`<p style="color:rgba(218, 57, 159, 1)"> A média das idades dos passageiros são = ${media}</p>`);

//-----------------//

//Sorteio do nome para ganhar o almoço

    indiceVetor = Math.floor(Math.random()*vetorNomes.length)
    nomeSorteado = vetorNomes[indiceVetor];
    document.write(`<p style="color:rgba(218, 57, 159, 1)"> O nome sorteado para ganhar o almoço é  = ${nomeSorteado}</p>`);



