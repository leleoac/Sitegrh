document.addEventListener('DOMContentLoaded', function() {
    const analiseForm = document.getElementById('analiseForm');
    const resultadoDiv = document.getElementById('resultado');

    if (analiseForm && resultadoDiv) {
        analiseForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const nome = document.getElementById('nome').value;
            const departamento = document.getElementById('departamento').value;
            const responsabilidades = document.getElementById('responsabilidades').value;
            const competencias = document.getElementById('competencias').value;

                        if (!nome || !departamento || !responsabilidades || !competencias) {
                alert("Por favor, preencha todos os campos.");
                return;
            }

            resultadoDiv.innerHTML = `
                <div class="exemplo-funcao">
                    <h4 class="titulo-funcao">${nome}</h4>
                    <div class="info-funcao">
                                                <p class="departamento-funcao"><strong>Departamento:</strong> ${departamento}</p>
                        <p class="responsabilidades-funcao"><strong>Responsabilidades:</strong> ${responsabilidades}</p>
                        <p class="competencias-funcao"><strong>Competências:</strong> ${competencias}</p>
                    </div>
                </div>
            `;
        });
    } else {
        console.error("Formulário ou div de resultado não encontrados. Verifique os IDs no HTML.");
    }
});