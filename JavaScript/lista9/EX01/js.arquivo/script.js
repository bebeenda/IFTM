window.addEventListener("DOMContentLoaded", function(){
    //eventos das caixas de texto
let cxNascimento = document.getElementById("cxNascimento");
let txtCPF = document.getElementById("txtCPF");
let txtMatricula = document.getElementById("txtMatricula");
let txtCodigo = document.getElementById("txtCodigo");
let txtCodigo2 = document.getElementById("txtCodigo2");
let txtCodigo3 = document.getElementById("txtCodigo3");
let txtCodigo4 = document.getElementById("txtCodigo4");
let txtCampus = document.getElementById ("txtCampus");
let txtTelefone = document.getElementById("txtTelefone");
let txtTelefone2 = document.getElementById("txtTelefone2");
let txtAltura = document.getElementById ("txtAltura");
let txtFaturamento = document.getElementById("txtFaturamento");
let txtHoras = document.getElementById("txtHoras");
let txtSenha = document.getElementById("txtSenha");

document.getElementById("btnDataNascimento").addEventListener("click", function(){
    //aqui peguei o elemento pelo id e ja coloquei o evento nele ao clicar chamando essa função

      //questão a
      let padraoNascimento = /^[0-3]\d[/][0-1]\d[/](\d{2}|\d{4})$/;
      (padraoNascimento.test(cxNascimento.value))?alert("Válido"):alert("Invalido");
});

document.getElementById("btnCPF").addEventListener("click", function(){
//questão b
    let padraoCPF = /^\d{3}[.]\d{3}[.]\d{3}[-]\d{2}$/;
    (padraoCPF.test(txtCPF.value))?alert("Válido"):alert("Inválido");

})


document.getElementById("btnMatricula").addEventListener("click", function(){
//questão c
    let padraoMatricula =  /^IFTM[-]\d{3}[/]\d{3}[-]\w{2}$/i;
    (padraoMatricula.test(txtMatricula.value))?alert("Válido"):alert("Inválido");

})

document.getElementById("btnCodigo").addEventListener("click", function(){
//questão d
    let padraoCodigo = /^MT[-]\d{2}[.]\d{3}[-]IFTM$/i;
    (padraoCodigo.test(txtCodigo.value))?alert("Válido"):alert("Inválido");

})


document.getElementById("btnCodigo2").addEventListener("click", function(){
//questão e
     let padraoCodigo2 = /^MT[-]\d{2}[.]\d{3}[-](I|i)(F|f)(T|t)(M|m)$/;
     (padraoCodigo2.test(txtCodigo2.value))?alert("Válido"):alert("Inválido");
    
})

document.getElementById("btnCodigo3").addEventListener("click", function(){
//questão f
    let padraoCodigo3 =  /^M\s{0,1}T[-]\d{2}[.]\d{3}[-]I\s{0,1}F\s{0,1}T\s{0,1}M$/i;
    (padraoCodigo3.test(txtCodigo3.value))?alert("Válido"):alert("Inválido");

})

document.getElementById("btnCodigo4").addEventListener("click", function(){
//questão g
    let padraoCodigo4 = /^(M|m)\s{0,1}(T|t)[-]\d{2}[.]\d{3}[-](I|i)\s{0,1}(F|f)\s{0,1}(T|t)\s{0,1}\s{0,1}(M|m)\s(Uberlândia Centro|UberlândiaA)$/;
    (padraoCodigo4.test(txtCodigo4.value))?alert("Válido"):alert("Inválido");
});

document.getElementById("btnCampus").addEventListener("click", function(){
    //questão h
    let padraoCampus = /^IFTM campus Uberlândia( Centro)?$/; //significa que o centro é opcional esse ? 
    (padraoCampus.test(txtCampus.value))?alert("Válido"):alert("Inválido");

});


document.getElementById("btnTelefone").addEventListener("click", function(){
    //questão i
    let padraoTelefone = /^\+\d{2}\(\d{2}\)\d{5}-\d{4}$/;
    (padraoTelefone.test(txtTelefone.value))?alert("Válido"):alert("Inválido");

});

document.getElementById("btnTelefone2").addEventListener("click", function(){
    //questão j
    let padraoTelefone2 = /^\(\d{2,3}\)\d{5}-\d{4}$/;
    (padraoTelefone2.test(txtTelefone2.value))?alert("Válido"):alert("Inválido");

});

document.getElementById("btnAltura").addEventListener("click", function(){
    //questão k
    let padraoAltura = /^[12]([.,]\d{1,2})?$/; //aceita numero com virgula ou ponto 

    if (padraoAltura.test(txtAltura.value))  //primeiro if faz a validação do regex enquanto o if de dentro faz a validação dos valores da altura
    {
        if(txtAltura.value < 1.3 || txtAltura.value > 2.5)
        alert("Inválido");

        else 
         alert("Válido")
    } 
    else
    alert("Inválido");

});

document.getElementById("btnFaturamento").addEventListener("click", function(){
    //questão l
    let padraoFaturamento = /^R\$\d{1,3}(\.\d{3})*(,\d{1,2})?$/; //? opcional se pode ou não haver 2 digitos razão dos () é para comportamento de um único bloco
    (padraoFaturamento.test(txtFaturamento.value))?alert("Válido"):alert("Inválido");

});

document.getElementById("btnHoras").addEventListener("click", function(){
    //questão M
    let padraoHoras = /^(2[0-3]|[01]\d):([0-5]\d):([0-5]\d):(\d\d)$/; // os dois primeiros blocos aceitam 00–23 , minutos 0- 59 e segundos 0-99
    (padraoHoras.test(txtHoras.value))?alert("Válido"):alert("Inválido");

});

document.getElementById("btnSenha").addEventListener("click", function(){
    //questão N
    let padraoSenha = /^[A-Za-z0-9._-]{5,}&[a-pA-P]+\.[aeiou]+(?:\.[A-Za-z0-5]+)?-[^0-9]+,[^A-Za-z0-9]{2},[^ab01]+$/; 

    (padraoSenha.test(txtSenha.value))?alert("Válido"):alert("Inválido");

});

})