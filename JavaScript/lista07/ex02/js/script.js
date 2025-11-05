window.addEventListener("DOMContentLoaded" , function(){

//declarações
  let btnTrocar = document.getElementById("btnTrocar");
  let cxTxt1 = document.getElementById("cxTxt1");
  let cxTxt2 = document.getElementById("cxTxt2");
  let lista = document.getElementById ("lista");



//função para trocar de acordo com o que selecionar na caixa

function tempo(){
    // console.log(new Date())
    // console.log(lista.value*1000); //testes para verificação dos segundos
    setTimeout(trocarTextos, lista.value * 1000); 

}

//função para trocar o texto
function trocarTextos(){
    //  console.log(new Date()) //testes para verificação dos segundos

    let texto1 = cxTxt1.value;
    let texto2 = cxTxt2.value;

    cxTxt1.value = texto2;
    cxTxt2.value = texto1;
}

btnTrocar.addEventListener("click", tempo); //após clicar no botão troca a caixa de texto após 2 segundos


})