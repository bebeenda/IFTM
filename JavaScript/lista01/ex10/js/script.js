numero = prompt("Informe um valor inteiro positivo maior que 0: ");
nome = prompt("Informe seu nome completo:");

for (i = 0; i < numero; i++)
    document.write(`<p>${nome} </p>`);
    //o valor de i é para mostrar quantas vezes o nome foi informado