vet = [];

for(i = 1; i < 60; i++)
{
    vet[i - 1] = i; 
}
    for(i = 0; i < 6; i++)
    {
        indiceVetor = Math.floor(Math.random()*vet.length);//vai controlar o tamanho do vetor
        nroSorte = vet[indiceVetor]; // o numero naquela posição do vetor
        document.write(`<p style="color:rgba(218, 57, 159, 1)"> Numeros sorteados = ${nroSorte}</p>`)
    }

