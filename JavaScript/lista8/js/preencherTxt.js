import { getStorage } from "./storage.js";
import { getWordAt, getWordsStartsWith, countWords } from "./util.js";

window.addEventListener("DOMContentLoaded", function(){

    //declaração dos eventos
    const txtInformado = document.getElementById("txtInformado");
    const btnAnalisar = document.getElementById("btnAnalisar");
    const select = document.getElementById ("select");
    const qtddePalavra = document.getElementById("qtddePalavra");
    const inicialPalavra = document.getElementById("inicialPalavra");
    const primeiraPalavra = document.getElementById("primeiraPalavra");
    const segundaPalavra = document.getElementById("segundaPalavra");
    const ultimaPalavra = document.getElementById("ultimaPalavra");
    const novoTxt = document.getElementById ("novoTxt");
    const papaiNoel = document.getElementById ("papaiNoel");

    //eventos
    //const textoInfor = localStorage.getItem("texto"); //coloquei o texto informado anteriormente dentro de uma variável e usei o getItem para pega-lo
    const textoInfor = getStorage("texto");

    if(!textoInfor || textoInfor == "")
        window.location.href = "index.html";

    txtInformado.innerHTML = textoInfor;

    btnAnalisar.addEventListener("click", Analisar);
    papaiNoel.addEventListener("click", abrirPagina);

    function abrirPagina(){
        window.location.href= "papaiNoel.html";
    }

    //criei uma função para analisar o texto novo
    function analisarTexto(texto){
        //quantidade de palavras
        qtddePalavra.innerHTML = countWords(texto);

        inicialPalavra.value = getWordsStartsWith(texto, "M");
        //se não houver palavra com a Letra M, fica vazio

        //primeira palavra
        primeiraPalavra.value = getWordAt(texto, 0);

        //segunda palavra
        segundaPalavra.value = getWordAt(texto, 1);

        //ultima palavra
        ultimaPalavra.value = getWordAt(texto, -1, true);
        
    }
    function Analisar(){
        if(select.value == "1") //se for sim, entra aqui
            analisarTexto(textoInfor);
        
        else //caso o usuário digite uma nova frase
            analisarTexto(novoTxt.value);
    }


});


    /*function analisarTexto(texto){
    //quantidade de palavras
    palavras = texto.split(" ");
    qtddePalavra.innerHTML = palavras.length;

    //palavras inciaadas coma a letra M
    palavrasM = " ";
    for(i = 0; i < palavras.length; i++)
    {
        if (palavras[i].startsWith("M") || palavras[i].startsWith("m"))
        {
            palavrasM = palavrasM + palavras[i] + " ";
        }

    inicialPalavra.value = palavrasM;
    //se não houver palavra com a Letra M, fica vazio

    //primeira palavra
    primeiraPalavra.value = palavras[0];

    //primeira palavra
    segundaPalavra.value = palavras[1]; //se não houver segunda palavra retorna undefined

    //ultima palavra
    ultimaPalavra.value = palavras[palavras.length - 1];
    
    }*/