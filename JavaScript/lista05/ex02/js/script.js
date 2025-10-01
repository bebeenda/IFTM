//contadores de voto
votoMickey = 0;
votoMinnie = 0;
votoPluto = 0;
votoPateta = 0;

mickey = document.getElementById("cardMickey");
minnie = document.getElementById("cardMinnie");
pluto = document.getElementById("cardPluto");
pateta = document.getElementById("cardPateta");

//eventos
mickey.addEventListener("mouseenter", colorirFundo);
minnie.addEventListener("mouseenter", colorirFundo); 
pluto.addEventListener("mouseenter", colorirFundo); 
pateta.addEventListener("mouseenter", colorirFundo); //esse evento colore o fundo do cards quando passar o mouse

mickey.addEventListener("mouseleave", tirarFundo);
minnie.addEventListener("mouseleave", tirarFundo); 
pluto.addEventListener("mouseleave", tirarFundo); 
pateta.addEventListener("mouseleave", tirarFundo); //esse evento colore o fundo do cards quando passar o mouse

mickey.addEventListener("click", () =>  contarVoto("mickey"));
minnie.addEventListener("click", () => contarVoto("minnie")); 
pluto.addEventListener("click", () => contarVoto("pluto")); 
pateta.addEventListener("click", () => contarVoto("pateta"));

//funçõess
function colorirFundo(ev) //evento
{
    // console.log(ev.target) //fui no console F12 localizei o evento(há muitas coisas disponiveis, uma delas é o target, onde mostra o evento mouseenter ser disparado. Então, o coloquei na função de mudar a cor nele
    ev.target.classList.add("fundoDiferente");
}

function tirarFundo(ev){
     ev.target.classList.remove("fundoDiferente");
}


function contarVoto(personagem){
    if(personagem == "mickey")
    {
        votoMickey ++; //se clicar no personagem mickey, conta voto pra ele
        document.getElementById("votosMickey").innerHTML = votoMickey;
    }
        

    if(personagem == "minnie")
    {
        votoMinnie ++;
        document.getElementById("votosMinnie").innerHTML = votoMinnie;
    }
        

    if(personagem == "pluto")
    {
        votoPluto ++;
        document.getElementById("votosPluto").innerHTML = votoPluto;
    }
        

    if(personagem == "pateta")
    {
        votoPateta++
        document.getElementById("votosPateta").innerHTML = votoPateta;
    }
        Vencedor();
}

function Vencedor(){
        mickey.classList.remove("fundoVencedor");
        minnie.classList.remove("fundoVencedor");
        pluto.classList.remove("fundoVencedor");
         pateta.classList.remove("fundoVencedor");

    if(votoMickey >= votoMinnie && votoMickey >= votoPluto && votoMickey >= votoPateta )
        mickey.classList.add("fundoVencedor");

    if(votoMinnie >= votoMickey && votoMinnie >= votoPluto && votoMinnie >= votoPateta)
        minnie.classList.add("fundoVencedor");

    if(votoPluto >= votoMickey && votoPluto >= votoMinnie && votoPluto >= votoPateta)
        pluto.classList.add("fundoVencedor");

    if(votoPateta >= votoMickey && votoPateta >= votoMinnie && votoPateta >= votoPluto)
        pateta.classList.add("fundoVencedor");

}
