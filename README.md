# Análise e Descrição de Funções (ADF)

Uma ferramenta web para auxiliar no processo de Análise e Descrição de Funções, otimizando a gestão de recursos humanos.

![image](https://github.com/user-attachments/assets/dd2e7298-2dc7-4d48-be3c-80d9fba4ec47)


Este projeto tem como objetivo informatizar o processo de Análise e Descrição de Funções (ADF), oferecendo uma interface intuitiva para definir os dados de uma função e gerar uma descrição formatada. A ADF é crucial para diversas atividades de RH, como recrutamento, avaliação de desempenho e gestão de salários.

## Funcionalidades
![image](https://github.com/user-attachments/assets/fdd34182-2618-41b3-b50c-12dc204f7b25)

*   **Definição do Perfil da Função:** Formulário para inserir informações como nome do posto de trabalho, titular, departamento, etc.
*   **Geração de Descrição da Função:** Com base nos dados inseridos, o sistema gera uma descrição formatada da função, incluindo responsabilidades e competências.
*   **Visualização de Exemplos Práticos:** Página com exemplos de ADF para diferentes funções.
*   **Enquadramento Teórico:** Explicação sobre o conceito de ADF e suas metodologias.

## Instalação

1.  Clone o repositório: `git clone https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git`
2.  Navegue até o diretório do projeto: `cd NOME_DO_REPOSITORIO`
3.  Abra o arquivo `index.html` no seu navegador.

## Como usar

### Definição do Perfil da Função
![image](https://github.com/user-attachments/assets/f9ba0328-d7cf-4df6-81b8-a2ab290baa1a)


1.  Acesse a página "Perfil".
2.  Preencha o formulário com os dados da função. Os campos com asterisco (\*) são obrigatórios.
3.  Clique em "Guardar".

### Geração da Descrição da Função

1.  Acesse a página "Início".
2.  Na seção "Sistema de Análise", preencha o formulário com o nome da função, departamento, responsabilidades e competências.
3.  Clique em "Gerar Descrição". A descrição formatada será exibida abaixo do formulário.

## Tecnologias

*   HTML
*   CSS
*   JavaScript
*   Font Awesome (para os ícones)

## Estrutura de arquivos
├── index.html       # Página inicial
├── perfil.html      # Página de perfil da função
├── adf.html         # Página com exemplos de ADF
├── style.css        # Folha de estilos CSS
├── scriptAnalise.js        # Arquivo JavaScript (para index.html)
├── script.js # Arquivo JavaScript (para perfil.html) 

**Observação importante sobre o scriptPerfil.js:** como a página `perfil.html` tem uma lógica de formulário diferente (salvar dados, em vez de gerar uma descrição), é uma boa prática criar um arquivo JavaScript separado para ela, como `scriptPerfil.js`.

## Créditos

*   Leo Cardoso
*   Henrique Franco

## Licença

[MIT](LICENSE)
