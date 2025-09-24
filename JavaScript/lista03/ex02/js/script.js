btnExibir = document.getElementById("btnExibir");
txtNome = document.getElementById("txtNome");

btnExibir.addEventListener("click", exibirMensagem);

function exibirMensagem(){
    alert(txtNome.value.toUpperCase()); //exibe o que foi escrito na caixa de formulário em letra maiúscula
}