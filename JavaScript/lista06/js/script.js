//Etapa 1
//Vetor todas as cartas
vetorCartas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ,14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
console.log (vetorCartas);


//Etapa 2
//vetor com 4 pares de cartas aleatórias
vetorPares = [];
while (vetorPares.length < 8) //caso houver alguma carta repetida, ele volta para sortear novamente
{
    sorteio = Math.floor(Math.random() * 27) + 1 //para sortear do 1 ao 27
    if(!vetorPares.includes(sorteio)) //se não tiver o numero não irá inserir novamente
    {
        vetorPares.push(sorteio);
        vetorPares.push(sorteio); //realizo o push duas vezes para sortear duas vezes o mesmo número
    }
}

console.log (vetorPares);

//Etapa 3
//Embaralhar as cartas

function Embaralhar (vetorPares) //criei essa função para usar nos próximos passos
{
vetorParesEmbaralhados = []; //crio um vetor para embaralhar
vetorIndice = []; //crio um vetor para pegar o indice

while (vetorIndice.length < 8) //sorteia 8 cartas
{
    sorteio = Math.floor(Math.random() * 8) //para sortear os numeros das cartas que sorteou la em cima
    if(!vetorIndice.includes(sorteio)) //se não tiver o numero não irá inserir novamente
    {
        vetorIndice.push(sorteio);
        vetorParesEmbaralhados.push(vetorPares[sorteio]) //depois de pegar o indice, coloco o numero sorteado no vetor embaralhar
    }

}
    console.log(vetorParesEmbaralhados);
    return vetorParesEmbaralhados;
    
}

vetorParesEmbaralhados = Embaralhar (vetorPares);

//Etapa 4
//mostrar as cartas na tela

function addImg(numero){ //criei uma função para adicionar a imagem
    imagem = new Image(); //instanciei a função
    imagem.src = "img/carta" +numero+ ".png"; //criei um parametroo para ser chamado quando passar pelo for
    imagem.alt = "imagens nipes de carta de baralho"

    document.getElementById("box").appendChild(imagem)

}

for(i = 0; i < vetorParesEmbaralhados.length; i ++)
{
    addImg(vetorParesEmbaralhados[i]) //percorri o for e coloquei a imagem correspondente ao indice que foi sorteado
}


