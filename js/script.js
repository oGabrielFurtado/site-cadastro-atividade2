function pegaNome() {
    let nome = document.querySelector('#username').value;
    return nome;
}

function pegaSenha() {
    let senha = document.querySelector('#senha').value;
    return senha;
}

function validaNomeESenha() {
    let nome = pegaNome();
    let senha = pegaSenha();
    
    if(nome.length === 0) {
        alert("Preencha o campo 'Nome de Usuário'!");
        document.querySelector('#username').focus();
    }

    if(senha.length === 0) {
        alert("Preencha o campo 'Senha'!");
        document.getElementById('senha').focus();
    } else if (senha.length <= 5) {
        alert("Senha com poucos caracteres!\nMínimo: 6");
        document.getElementById('senha').focus();
    }
}