//pagina principal
function ir() {
    const trilho = document.getElementById('carrosel-trilho');
    trilho.scrollBy({ left: 350, behavior: 'smooth' });
}

function voltar() {
    const trilho = document.getElementById('carrosel-trilho');
    trilho.scrollBy({ left: -350, behavior: 'smooth' });
}

function irDestino() {
    const trilho = document.getElementById('destino-carrosel');
    trilho.scrollBy({ left: 220, behavior: 'smooth' });
}

function voltarDestino() {
    const trilho = document.getElementById('destino-carrosel');
    trilho.scrollBy({ left: -220, behavior: 'smooth' });
}

//pagina turismo

const inputOrigem = document.getElementById("input-origem");
const inputDestino = document.getElementById("input-destino");
const inputData = document.getElementById("input-data");
const opcoesEscondidas = document.getElementById("opcoes-turismo");
const bloco = document.querySelectorAll("#escolha-turismo");

function verificar() {
    const dataPrenchida = inputData.value !== "";
    const destPrenchido = inputDestino.value !== "";
    const origPrenchido = inputOrigem.value !== "";
    atualizar();
    if (dataPrenchida && destPrenchido && origPrenchido) {
        opcoesEscondidas.removeAttribute("hidden");
    } else {
        opcoesEscondidas.setAttribute("hidden", "hidden");
    }
    
}

inputOrigem.addEventListener("change", verificar);
inputDestino.addEventListener("change", verificar);
inputData.addEventListener("change", verificar);

function atualizar() {
    bloco.forEach((bloco) => {
        const numero = Math.floor((Math.random()*15)+1);
        bloco.querySelector("#imagem-turismo").src = `./images/aleatorias/${numero}.jpg`;

        bloco.querySelector("#opcao1").innerHTML = inputOrigem.value;
        bloco.querySelector("#opcao2").innerHTML = inputDestino.value;
        bloco.querySelector("#preco1").innerHTML = Math.floor(Math.random()*(8000-4000)+4000);
        bloco.querySelector("#preco2").innerHTML = Number(bloco.querySelector("#preco1").innerHTML)+2000;
    })
}
