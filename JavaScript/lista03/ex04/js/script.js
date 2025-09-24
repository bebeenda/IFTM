valor1 = document.getElementById("txtValor1");
valor2 = document.getElementById("txtValor2");
resultado = document.getElementById("btnResultado");

btnResultado.addEventListener("click", mostrarResultado)

function mostrarResultado(){

    total = parseFloat(valor1.value) + parseFloat(valor2.value); 

    //verificação campos
    if (valor1.value.trim() == "" || valor2.value.trim() =="")
    //trim tira todos os espaços em branco
        alert("O campo está vazio. Informe um valor!!");

    else if(isNaN(valor1.value) || isNaN(valor2.value)) //NaN is not a number
        alert("Informe um número válido! Informe apenas números")
    
    else if(parseFloat(valor1.value) > 50 || parseFloat(valor2.value)> 50)
        alert("Digite um valor de nota até 50,0");

    //verificação das notas

    else
    {
        if (total < 60)
            alert("Aluno reprovado!")

        else
            alert("Aluno aprovado!")

    }

    

}