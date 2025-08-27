nota1 = parseFloat(prompt("Digite a nota 1"));
nota2 = parseFloat(prompt("Digite a nota 2"));
notaTotal = nota1 + nota2;
notaFalta = 60 - notaTotal


if (notaTotal >= 60)
    alert(`Você está aprovado. A sua nota total foi ${notaTotal} pontos!`);

else
    alert(`Você está reprovado :( A sua nota total foi ${notaTotal} pontos! faltaram ${notaFalta} pontos`);

