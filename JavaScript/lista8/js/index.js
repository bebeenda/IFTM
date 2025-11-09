import { saveStorage } from "./storage.js";

window.addEventListener("DOMContentLoaded", function(){

    //declaração dos eventos
const btnEnviar = document.getElementById("btnEnviar");
const cxTxt = document.getElementById("cxTxt");

btnEnviar.addEventListener("click", Enviar);

function Enviar(){ //setItem é para inserir no localStorage
    //localStorage.setItem("texto", cxTxt.value); //coloco o que foi digitado na caixa de texto dentro da chave texto
    saveStorage("texto", cxTxt.value);

    window.location.href= "preencherTxt.html"; //usei o href para abrir uma nova pagina
};



})