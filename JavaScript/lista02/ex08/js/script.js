opcoes = ["pedra", "papel", "tesoura"];


indiceJogador1 = Math.floor(Math.random()*3); //Sorteio: 0 a 2

indiceJogador2 = Math.floor(Math.random()*3);//Sorteio: 0 a 2

document.write(`<p> jogador 1 </p>`);
document.write(`<img width="100px" src = "img/${opcoes[indiceJogador1]}.png">`);

document.write(`<p> jogador 2 </p>`);
document.write(`<img width="100px" src = "img/${opcoes[indiceJogador2]}.png">`);

if (indiceJogador1 == indiceJogador2)
    document.write("Empate");

else if (indiceJogador1 == 0) //pedra
{
    if (indiceJogador2 == 1) //papel
    {
         document.write("Jogador 2 ganhou!"); //papel
    }
       

    else
    {
        document.write("Jogador 1 ganhou!");

    }
    
}
else if (indiceJogador1 == 1)
{
    if (indiceJogador2 == 0)
    {
        document.write("Jogador 1 ganhou!"); // ou voce é 1 //pedra
    }

    else
    {
        document.write("Jogador 2 ganhou!"); // ou voce é 2 //papel
 
    }
}

else if(indiceJogador1 == 2)
{
    if(indiceJogador2 == 0)
    {
        document.write("Jogador 2 ganhou!");//pedra

    }

    else
    {
        document.write("Jogador 1 ganhou!");//tesoura

        }
}


