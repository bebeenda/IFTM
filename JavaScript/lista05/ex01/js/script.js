mensagem = document.getElementById("mensagem");

cards = [
    {img: "Pensativo.png"},
    {img: "Assustado.png"},
    {img: "Nervoso.png"},
    {img: "alegre.png"}
];

cardImagem = document.getElementById("cardImagem"); //avatar que carrega a tela

cardImagem.addEventListener("mouseenter", acordarAvatar); //esse evento "acorda o avatar"
cardImagem.addEventListener("click", falarAvatar);
cardImagem.addEventListener("mouseout", dormirAvatar);



function acordarAvatar(){
   cardImagem.src = `img/${cards[1].img}`; //aqui eu pego o segundo card do meu array que é o assustado
   mensagem.textContent = "O que você quer?"
}

function falarAvatar(){

    cardImagem.classList.remove("shake");
    nome = prompt("Qual é o seu nome?"); //pergunta ao usuário o nome dele

    if(nome == null || nome.trim() == "") //se nome for igual a nulo e para verificar os espaços
    {
        cardImagem.src = `img/${cards[2].img}`;
        mensagem.textContent = "Não me faça perder o meu tempo!"
        cardImagem.classList.add("shake");
    }

    else
    {
        cardImagem.src = `img/${cards[3].img}`;
        mensagem.textContent = `${nome} Seja bem vindo(a)!`;
        cardImagem.classList.add("dance");
    }
}

function dormirAvatar()
{
    cardImagem.src = `img/${cards[0].img}`;
    mensagem.textContent = "zzzzzzzzz!"
    cardImagem.classList.remove("shake");
    cardImagem.classList.remove("dance");

}