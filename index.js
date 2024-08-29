document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simulação de um cadastro bem-sucedido
    if (name && email && password) {
        document.getElementById('message').textContent = 'Cadastro realizado com sucesso!';
        document.getElementById('message').style.color = 'green';
        // Limpar o formulário
        this.reset();
    } else {
        document.getElementById('message').textContent = 'Por favor, preencha todos os campos.';
        document.getElementById('message').style.color = 'red';
    }
});
