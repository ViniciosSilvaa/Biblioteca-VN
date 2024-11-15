// Função para verificar a senha do administrador
function verificarLogin() {
    const senha = document.getElementById('senhaAdmin').value;
    const mensagem = document.getElementById('mensagem');
    
    // Senha do administrador
    const senhaCorreta = "admin123"; // Defina aqui a senha do administrador

    if (senha === senhaCorreta) {
        // Senha correta, habilitar os botões
        habilitarBotaoAlteracaoStatus();
        mensagem.style.color = "green";
        mensagem.textContent = "Login bem-sucedido! Você agora pode alterar os status dos livros.";
    } else {
        // Senha incorreta
        mensagem.style.color = "red";
        mensagem.textContent = "Senha incorreta. Tente novamente.";
    }
}

// Função para habilitar os botões de alteração de status
function habilitarBotaoAlteracaoStatus() {
    // Habilitar os botões de alteração de status
    document.getElementById('btn1').disabled = false;
    document.getElementById('btn2').disabled = false;
    document.getElementById('btn3').disabled = false;
    document.getElementById('btn4').disabled = false;
}

// Função para alterar o status do livro
function mudarStatus(livroId, statusId) {
    const statusElement = document.getElementById(statusId);
    
    // Se o status for "Disponível", muda para "Emprestado"
    if (statusElement.innerText === "Disponível") {
        statusElement.innerText = "Emprestado";
        statusElement.classList.remove("disponivel");
        statusElement.classList.add("emprestado");
    } else {
        // Caso contrário, muda para "Disponível"
        statusElement.innerText = "Disponível";
        statusElement.classList.remove("emprestado");
        statusElement.classList.add("disponivel");
    }
}
