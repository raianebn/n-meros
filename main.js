// Acessando os elementos através do DOM
const numeroSenha = document.querySelector('.parametro-senha__texto');
const botaoMenos = document.querySelector('.botao-menos');
const botaoMais = document.querySelector('.botao-mais');

// Criando a variável para controlar o valor atual do tamanho da senha
let tamanhoSenha = 12;

// Função para atualizar o número que aparece na tela
function atualizarTexto() {
    numeroSenha.textContent = tamanhoSenha;
}

// Evento para diminuir o número ao clicar no botão "-"
botaoMenos.onclick = function() {
    if (tamanhoSenha > 1) { // Impede que o número seja menor que 1
        tamanhoSenha = tamanhoSenha - 1;
        atualizarTexto();
    }
};

// Evento para aumentar o número ao clicar no botão "+"
botaoMais.onclick = function() {
    if (tamanhoSenha < 20) { // Limita o tamanho máximo em 20 caracteres (opcional)
        tamanhoSenha = tamanhoSenha + 1;
        atualizarTexto();
    }
};
