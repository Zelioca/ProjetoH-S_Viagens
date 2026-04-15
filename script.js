
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
