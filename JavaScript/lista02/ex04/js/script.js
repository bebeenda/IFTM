N = parseInt(prompt("A partir de qual número deseja realizar o sorteio?"));
M = parseInt(prompt("Até qual número deseja realizar o sorteio?"));

var nmroAleatorio = Math.floor(Math.random()* (M - N + 1)) + N;

document.write(`<p style="color:rgba(218, 57, 159, 1)"> Número aleatório = ${nmroAleatorio}</p>`);