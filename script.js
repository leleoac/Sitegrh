document.getElementById('perfilForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Validação adicional (opcional, mas recomendada)
    const nomePosto = document.getElementById('nomePosto').value.trim();
    const titular = document.getElementById('titular').value.trim();
    const departamento = document.getElementById('departamento').value.trim();

    if (nomePosto === "" || titular === "" || departamento === "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return; // Impede o envio se houver campos vazios
    }

    alert("Dados guardados com sucesso!"); // Exibe o popup de sucesso
    document.getElementById("perfilForm").reset();//limpa o form depois de enviar
});

