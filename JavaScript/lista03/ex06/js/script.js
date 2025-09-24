valor1 = document.getElementById("txtValor1");
valor2 = document.getElementById("txtValor2");
btnSoma = document.getElementById("btnSoma");
btnSubtracao = document.getElementById("btnSubtracao");
btnMultiplicacao = document.getElementById("btnMultiplicacao");
btnDivisao = document.getElementById("btnDivisao");
resultado = document.getElementById("txtResultado");

btnSoma.addEventListener("click" , soma);
btnSubtracao.addEventListener("click" , subtracao);
btnMultiplicacao.addEventListener("click" , multiplicacao);
btnDivisao.addEventListener("click" , divisao);

function soma(){
    num1 = parseFloat(valor1.value); //convertendo o valor para float para nao contatenar o resultado
    num2 = parseFloat(valor2.value);

    
    if (valor1.value.trim() == "" || valor2.value.trim() =="")
    //trim tira todos os espaços em branco
        alert("O campo está vazio. Informe um valor!!");

    else if(isNaN(num1) || isNaN(num2)) //NaN is not a number
        alert("Informe um número válido! Informe apenas números");

    else
    resultado.value = num1 + num2;
}

function subtracao(){
    num1 = parseFloat(valor1.value); //convertendo o valor para float para nao contatenar o resultado
    num2 = parseFloat(valor2.value);

     if (valor1.value.trim() == "" || valor2.value.trim() =="")
    //trim tira todos os espaços em branco
        alert("O campo está vazio. Informe um valor!!");

    else if(isNaN(num1) || isNaN(num2)) //NaN is not a number
        alert("Informe um número válido! Informe apenas números");

    else
    resultado.value = num1 - num2;
}

function multiplicacao(){
    num1 = parseFloat(valor1.value); //convertendo o valor para float para nao contatenar o resultado
    num2 = parseFloat(valor2.value);

     if (valor1.value.trim() == "" || valor2.value.trim() =="")
    //trim tira todos os espaços em branco
        alert("O campo está vazio. Informe um valor!!");

    else if(isNaN(num1) || isNaN(num2)) //NaN is not a number
        alert("Informe um número válido! Informe apenas números");

    else
    resultado.value = num1 * num2;
}

function divisao(){
    num1 = parseFloat(valor1.value); //convertendo o valor para float para nao contatenar o resultado
    num2 = parseFloat(valor2.value);

     if (valor1.value.trim() == "" || valor2.value.trim() =="")
    //trim tira todos os espaços em branco
        alert("O campo está vazio. Informe um valor!!");

    else if(isNaN(num1) || isNaN(num2)) //NaN is not a number
        alert("Informe um número válido! Informe apenas números");

    else
    {
        if (valor2.value == 0)
            alert("Não é possível realizar uma divisão por 0. Informe outro número");

        else
            resultado.value = num1 / num2;
    }
    

}