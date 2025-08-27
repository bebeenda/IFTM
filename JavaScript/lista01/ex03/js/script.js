nome_completo = prompt("Informe seu nome completo:");
idade = parseFloat(prompt("Informe sua idade:"));
maior_idade = 18 - idade;

if (idade >= 18)
alert(`${nome_completo}, você já POSSUI idade para tirar carteira`);

else
alert(`${nome_completo}, você ainda NÃO POSSUI idade para tirar carteira falta(m) ${maior_idade} anos.`);
