
    cartas = [];

    for(i = 0; i< 27; i++) //inicia o vetor de cartas
    {
        cartas[i] = i+1;
    }
    
    //cartas
    for(i = 1; i <= 4; i++) //4 jogadores
    {
        document.write('<div style="display:flex; align-items: center; "> <h2 style="padding-right:20px"> Cartas do jogador ' + i + ':</h2>');       
        
        document.write('<div  >');
        
        for(j = 0; j< 3; j++)
        {
             indiceCartaSorteada = Math.floor(Math.random()*cartas.length); //para arredondar de 1 até 27
             valorCarta = cartas[indiceCartaSorteada];
             cartas.splice(indiceCartaSorteada, 1); //para ir retirando os nomes que ja foram sortedos
             
            document.write(`<img style="padding-right:20px" src = "img/carta${valorCarta}.png">`);
        }
       document.write('</div>');

        document.write('</div>');
    }
    
    
    