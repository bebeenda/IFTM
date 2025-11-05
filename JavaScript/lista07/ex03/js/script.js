window.addEventListener("DOMContentLoaded" , function(){
let nome = document.getElementById("nome");

nome.innerHTML = prompt("Insira seu nome completo");
let tamanhoFonte = 14;
let idCronometro;

idCronometro = setInterval(aumentarFonte, 500); //criei uma id cronometro para controlar o tempo que a fonte vai crescer

function aumentarFonte(){
    tamanhoFonte = tamanhoFonte + 2;
    nome.style.fontSize = tamanhoFonte + "px";

    if(tamanhoFonte == 40)
        clearInterval(idCronometro); //quando chegar a 40px ele vai parar de aumentar
}











})