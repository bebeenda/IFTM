window.addEventListener("DOMContentLoaded", function() {
  let lista = document.getElementById("listaNomes");
  let indice = 0;

  let nomes = [];
  let quantidade = parseInt(prompt("Quantos nomes deseja inserir?"));

  for (i = 0; i < quantidade; i++) { //faz um for para inserir os nomes
    let nome = prompt("Informe o nome " + (i + 1) + ":");
    nomes.push(nome);
  }

  const intervalo = setInterval(function() { //crio a função para ir aparecendo os nomes

    let item = document.createElement("li"); // cria um elemento lista para colocar os nomes
    item.textContent = nomes[indice]; // coloca o texto dentro dele
    lista.appendChild(item); //preencho o li dentro do ul 

    indice++; // esse indice ++ é para passar para o proximo nome

    // quando chegar no fim do vetor para o intervalo de 1000 segundos
    if (indice >= nomes.length) 
        clearInterval(intervalo);
    

  }, 1000); // aqui para rodar a cada 1000 segundos
});
