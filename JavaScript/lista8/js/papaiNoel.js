window.addEventListener("DOMContentLoaded", function(){
    //declaração dos eventos
let qtdadeFalas = document.getElementById ("qtdadeFalas");
let btnFalas = document.getElementById("btnFalas");
let falasNoel = document.getElementById("falasNoel")

//eventos

btnFalas = addEventListener("click", Falas)

function Falas(){
    hoho = qtdadeFalas.value; //valor da quantidade de hoho

    if(isNaN(hoho))
    {
        alert("Número de falas inválido! Favor insira somente números!!");
        qtdadeFalas.value = ""; // limpa a caixa de texto
        return;
    }
        
    for(i = 0; i < hoho; i++)
    {
        paragrafo = document.createElement("p");
        paragrafo.style.fontWeight = "normal";
        paragrafo.innerHTML = "Ho Ho Ho Feliz Natal!";
        falasNoel.appendChild(paragrafo);

    }

}











})