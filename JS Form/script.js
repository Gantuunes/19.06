function mostrarMensagem() {
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var mensagem = `${nome}, você tem ${idade} anos.`;

    if (idade > 18) {
        alerta = "Acesso liberado";
    } else {
        alerta = "Acesso bloqueado";
    }


    document.getElementById("mensagem").innerText = mensagem;
    document.getElementById("alerta").innerText = alerta;
}