// Configurações iniciais
let numeroMaximo = 10;
let numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
let tentativas = 0;

// Exibe o número máximo no HTML
document.getElementById("numero-maximo").textContent = numeroMaximo;

// Adiciona evento ao botão
document.getElementById("botao-enviar").addEventListener("click", () => {
    let chute = Number(document.getElementById("entrada-chute").value);
    let feedback = document.getElementById("feedback");

    // Validação do chute
    if (isNaN(chute) || chute < 1 || chute > numeroMaximo) {
        feedback.textContent = "⚠️ Por favor, insira um número válido dentro do intervalo.";
        return;
    }

    tentativas++;

    // Verifica o chute (correção aqui)
    if (chute === numeroSecreto) {
        feedback.textContent = ` Parabéns! Você acertou o número secreto ${numeroSecreto} em ${tentativas} tentativas.`;
    } else if (chute > numeroSecreto) {
        feedback.textContent = ` O número secreto é **menor** que ${chute}.`;
    } else {
        feedback.textContent = ` O número secreto é **maior** que ${chute}.`;
    }

    // Limpa o campo de entrada
    entradaChute.value = '';
});
// Get a reference to the input element
const entradaChute = document.getElementById("entrada-chute"); 

document.getElementById("botao-enviar").addEventListener("click", () => {
  let chute = Number(entradaChute.value); // Now entradaChute should be defined
  // ... (rest of your code)
});