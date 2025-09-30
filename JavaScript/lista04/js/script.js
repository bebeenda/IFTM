btnGerarResultado = document.getElementById("btnGerarResultado");
btnGerarResultado.addEventListener("click", gerarSorteio)

function gerarSorteio(){
    candidatos =[
        {nome: "Jair Messias Bolsonaro", partido: "PL", img: "candidato1.png"},
        {nome: "Luís Inácio Lula da Silva", partido: "PT", img: "candidato2.png"},
        {nome: "Ciro Gomes", partido: "PDT", img: "candidato3.png"}, 
        {nome: "Simone Tebet", partido: "MDB", img:"candidato4.png"},  //objeto [atributo: valor]
        ];
        
        //indCand1 = Math.floor(Math.random()*4); //gera um  número aleatorio no vetor de 0 a 3
        
        // indices = [0, 1, 2, 3]; //vetor auxiliar para colocar os 
        // // indCand1 = indices.splice(Math.floor(Math.random() * indices.length), 1 [0])
        
        // cand1=  Math.floor(Math.random() * indices.length); 
        // indCand1 = indices[cand1];
        // indices.splice(cand1,1);
        
        // cand2 =  Math.floor(Math.random() * indices.length);
        // indCand2 = indices[cand2];
        
        
        // document.getElementById("candSorteado1").innerHTML = candidatos[indCand1].nome;
        // document.getElementById("candSorteadoPart1").innerHTML = candidatos[indCand1].partido;
        // document.getElementById("candSorteadoImg1").src = `img/${candidatos[indCand1].img}`;
        
        
        // //indCand2 = Math.floor(Math.random()*4);
        
        // document.getElementById("candSorteado2").innerHTML = candidatos[indCand2].nome;
        // document.getElementById("candSorteadoPart2").innerHTML = candidatos[indCand2].partido;
        // document.getElementById("candSorteadoImg2").src = `img/${candidatos[indCand2].img}`;
        
        indices = [0,1,2,3];
        nroVotos = Math.round(Math.random() * 100); //gera um número de 0 a 100
        vetVotos =[nroVotos, 100 - nroVotos];
        indicesSorteados = []; //pra guardar o numero do sorteado, ja que no for não tem mais
        
        
        for (i=1; i<=2; i++) {
            indCand = indices.splice(Math.floor(Math.random()*indices.length), 1)[0];
            indicesSorteados[i - 1] = indCand;
            document.getElementById(`candSorteado${i}`).innerHTML = candidatos[indCand].nome;
            document.getElementById(`candSorteadoPart${i}`).innerHTML = candidatos[indCand].partido;
            document.getElementById(`candSorteadoImg${i}`).src = `img/${candidatos[indCand].img}`;
            document.getElementById(`votosCand${i}`).innerHTML = vetVotos[i - 1].toFixed(1);
        }
        
        if(vetVotos[0] == vetVotos[1])
            document.getElementById("candVencedor").innerHTML = "Empate";
        
        else if(vetVotos[0] > vetVotos[1])
        {
            document.getElementById("candVencedor").innerHTML = candidatos[indicesSorteados[0]].nome;
            document.getElementById("percVencedor").innerHTML = vetVotos[0].toFixed(1);
        }
            
        
        else
        {
            document.getElementById("candVencedor").innerHTML = candidatos[indicesSorteados[1]].nome;
            document.getElementById("percVencedor").innerHTML = vetVotos[1].toFixed(1);
        }
            
}
gerarSorteio();



