N = prompt("Quantos números deseja sortear?");
var nmroAleatorio = Math.floor(Math.random()*N)+1;
//gera um número aleatório dentro de N e soma mais o 1 para começar com 1
document.write(`<p style="color:rgba(218, 57, 159, 1)"> Número aleatório = ${nmroAleatorio}</p>`);