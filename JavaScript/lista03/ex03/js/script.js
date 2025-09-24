valor1 = document.getElementById("txtValor1");
btnDobrar = document.getElementById("btnDobrar");
valor2 = document.getElementById("txtValor2");

btnDobrar.addEventListener("click", dobrarValor);


function dobrarValor(){

    valor2.value = valor1.value * 2; //pego a multiplicação do valor por 2 e coloco na variável valor2 para mostrar na caixinha

    //verificações

    if(valor1.value.trim() =="") //trim tira os espaços em branco
        alert("O campo está vazio. Insira um valor!");
    

    else if(isNaN(valor1.value)) //isNan is not a number
        alert("Informa um número válido!");
    

    else
        valor2.value = valor1.value * 2; //mostra o resultado dentro da caixa de texto
    
}