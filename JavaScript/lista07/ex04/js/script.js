window.addEventListener("DOMContentLoaded", function() {
  let mensagem = document.getElementById("mensagem");
  let segundos = parseInt(prompt("Informe quantos segundos deseja para carregar a página do Google:"));

    const tempo = setInterval(function() {
    mensagem.textContent = "Por favor, aguarde " + segundos + " segundos para carregar a página do Google.";
    segundos--; // diminuir os segundos

    if (segundos < 0)  //se os segundos for menor que 0, a página irá carregar
    {
      clearInterval(tempo);
      window.location.href = "https://www.google.com";
    }
  }, 1000); // para exibir o texto a cada 1 segundo
});