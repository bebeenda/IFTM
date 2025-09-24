txtLogin = document.getElementById("txtLogin");
txtSenha = document.getElementById("txtSenha");
txtConfirma = document.getElementById("txtConfirma");
entrarbtn = document.getElementById("btnEntrar");
limparbtn = document.getElementById("btnLimpar");


btnEntrar.addEventListener("click", entrar);
btnLimpar.addEventListener("click", limpar);


function entrar(){

    login = txtLogin.value;
    senha = txtSenha.value;
    confirma = txtConfirma.value;

     if (login.trim() == "")
        alert("O campo está vazio. Informe um valor!!");

    else if(senha != confirma)
        alert("Erro! Os campos de senha e confirmar senha não são correspondentes.");

    else
        alert("Campos inseridos corretamente!");

        //para limpar os campos senha e confirmar senha
        txtSenha.value = "";
        txtConfirma.value = "";
}

function limpar(){
     document.getElementById("campos").reset();
     //coloquei uma id no formulário, que quando clicar em limpar vai limpar todos os campos com essa função reset()
}