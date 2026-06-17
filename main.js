// Acessando os elementos atraves do DOM
const numeroSenha = document.querySelector('.parametro-senha__texto');
const botaoMenos = document.querySelector('.botao-menos');
const botaoMais = document.querySelector('.botao-mais');

// Criando a variavel para controlar o valor atual do tamanho da senha
let tamanhoSenha = 12;

// Funcao para atualizar o numero que aparece na tela
function atualizarTexto() {
    numeroSenha.textContent = tamanhoSenha;
}

// Evento para diminuir o numero ao clicar no botao "-"
botaoMenos.onclick = function() {
    if (tamanhoSenha > 1) { // Impede que o numero seja menor que 1
        tamanhoSenha = tamanhoSenha - 1;
        atualizarTexto();
    }
};

// Evento para aumentar o número ao clicar no botao "+"
botaoMais.onclick = function() {
    if (tamanhoSenha < 20) { // Limita o tamanho maximo em 20 caracteres (opcional)
        tamanhoSenha = tamanhoSenha + 1;
        atualizarTexto();
    }
};
