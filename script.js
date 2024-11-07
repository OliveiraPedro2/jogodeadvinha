let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

const botaoEnviar = document.getElementById('enviar');
const inputPalpite = document.getElementById('palpite');
const displayMensagem = document.getElementById('mensagem');
const botaoReiniciar = document.getElementById('reiniciar');

botaoEnviar.addEventListener('click', () => {
    const palpiteUsuario = Number(inputPalpite.value);
    tentativas++;

    if (palpiteUsuario < 1 || palpiteUsuario > 100) {
        displayMensagem.textContent = 'Por favor, digite um número entre 1 e 100.';
    } else if (palpiteUsuario === numeroAleatorio) {
        displayMensagem.textContent = `Parabéns! Você acertou o número ${numeroAleatorio} em ${tentativas} tentativas!`;
        botaoReiniciar.style.display = 'block';
        botaoEnviar.disabled = true;
    } else {
        displayMensagem.textContent = palpiteUsuario < numeroAleatorio ? 'Muito baixo! Tente novamente.' : 'Muito alto! Tente novamente.';
    }
});

botaoReiniciar.addEventListener('click', () => {
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    tentativas = 0;
    displayMensagem.textContent = '';
    inputPalpite.value = '';
    botaoEnviar.disabled = false;
    botaoReiniciar.style.display = 'none';
});