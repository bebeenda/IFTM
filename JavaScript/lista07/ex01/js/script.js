window.addEventListener("DOMContentLoaded" , function(){

//declarações
  let btnTrocar = document.getElementById("btnTrocar");
  let cxTxt1 = document.getElementById("cxTxt1");
  let cxTxt2 = document.getElementById("cxTxt2");



//função para 2 segundos

function tempo(){
    setTimeout(trocarTextos, 2000); 
}

//função para trocar o texto
function trocarTextos(){

    let texto1 = cxTxt1.value;
    let texto2 = cxTxt2.value;

    cxTxt1.value = texto2;
    cxTxt2.value = texto1;
}

btnTrocar.addEventListener("click", tempo); //após clicar no botão troca a caixa de texto após 2 segundos













})