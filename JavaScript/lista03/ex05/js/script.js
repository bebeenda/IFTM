valor1 = document.getElementById("txtValor1");
valor2 = document.getElementById("txtValor2");
resultado = document.getElementById("btnResultado");

btnResultado.addEventListener("click", mostrarResultado)

function mostrarResultado(){


    nota1 = parseFloat(valor1.value); //precisa fazer o parse para não contatenar como strings os resultados
    nota2 = parseFloat(valor2.value);
    total = nota1 + nota2;
    

    //verificação campos

    if (valor1.value.trim() == "" || valor2.value.trim() =="")
    //trim tira todos os espaços em branco
        alert("O campo está vazio. Informe um valor!!");

    else if(isNaN(nota1) || isNaN(nota2)) //NaN is not a number
        alert("Informe um número válido! Informe apenas números")


    else if(nota1 > 50 || nota2 > 50)
        alert("Digite um valor de nota até 50,0");
 
    //verificação das notas
    else
    {
        if (total < 60)
        alert(`Aluno reprovado! Sua nota é ${total}. Faltam ${60 - total} pontos para passar de ano!`);

        else
        alert(`Aluno aprovado! Sua nota é ${total}! Parabéns`);
    }
   
 }
