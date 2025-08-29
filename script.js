const grupos = {
    indigena: ['am', 'rr', 'pa', 'ac', 'ro', 'mt', 'ma'],
    quilombola: ['ba', 'ma', 'mg', 'pa', 'to', 'go'],
    ribeirinho: ['am', 'pa', 'ac', 'ro', 'ap'],
    caicara: ['sp', 'pr', 'rj', 'es'],
    kalunga: ['go', 'to', 'ba']
};

function mostrarGrupo(grupo) {
    document.querySelectorAll('.shape').forEach(e => {
        e.classList.remove('indigena', 'quilombola', 'ribeirinho', 'caicara', 'kalunga');
        e.style.fill = '';
    });

    if (grupo && grupos[grupo]) {
        grupos[grupo].forEach(uf => {
            const path = document.querySelector(`#shape_${uf}`);
            if (path) {
                path.classList.add(grupo);
                path.style.fill = '#f39c12';
            }
        });
    }
}

let indigena = document.getElementById("indigenaButton");
let ribeirinho = document.getElementById("ribeirinhoButton");
let quilombola = document.getElementById("quilombolaButton");
let caicara = document.getElementById("caicaraButton");
let kalunga = document.getElementById("kalungaButton");

let cardIndigena = document.getElementById('card-indigena')
let cardCaicara = document.getElementById('card-caicara')
let cardQuilombola = document.getElementById('card-quilombola')
let cardRibeirinho = document.getElementById('card-ribeirinho')
let cardKalunga = document.getElementById('card-kalunga')

let botaoAtivo = null; // <- botão clicado atualmente

function mudarFundo(btn){
    resetarBotaoCores();

    if(btn == 'indigena'){
        aplicarEstiloAtivo(indigena, '#712626', 'white');
        botaoAtivo = indigena;
        cardIndigena.style.display = 'block'
        cardRibeirinho.style.display = 'none'
        cardQuilombola.style.display = 'none'
        cardCaicara.style.display = 'none'
        cardKalunga.style.display = 'none'
    } else if (btn == 'ribeirinho'){
        aplicarEstiloAtivo(ribeirinho, '#a46c30', 'white');
        botaoAtivo = ribeirinho;
        cardIndigena.style.display = 'none'
        cardRibeirinho.style.display = 'block'
        cardQuilombola.style.display = 'none'
        cardCaicara.style.display = 'none'
        cardKalunga.style.display = 'none'
    } else if (btn == 'quilombola'){
        aplicarEstiloAtivo(quilombola, '#c87d27', 'white');
        botaoAtivo = quilombola;
        cardIndigena.style.display = 'none'
        cardRibeirinho.style.display = 'none'
        cardQuilombola.style.display = 'block'
        cardCaicara.style.display = 'none'
        cardKalunga.style.display = 'none'
    } else if (btn == 'caicara'){
        aplicarEstiloAtivo(caicara, '#a95728', 'white');
        botaoAtivo = caicara;
        cardIndigena.style.display = 'none'
        cardRibeirinho.style.display = 'none'
        cardQuilombola.style.display = 'none'
        cardCaicara.style.display = 'block'
        cardKalunga.style.display = 'none'
    } else if (btn == 'kalunga'){
        aplicarEstiloAtivo(kalunga, '#DEB887', 'white');
        botaoAtivo = kalunga;
        cardIndigena.style.display = 'none'
        cardRibeirinho.style.display = 'none'
        cardQuilombola.style.display = 'none'
        cardCaicara.style.display = 'none'
        cardKalunga.style.display = 'block'
    }
}

function aplicarEstiloAtivo(botao, bgColor, color) {
    botao.style.backgroundColor = bgColor;
    botao.style.color = color;
}

function resetarBotaoCores() {
    [indigena, ribeirinho, quilombola, caicara, kalunga].forEach(btn => {
        btn.style.backgroundColor = 'white';
        btn.style.color = 'black';
    });
    botaoAtivo = null;
}

function recarregar(){
    location.reload();
}

// Responsividade do mapa
let mapaIdHeight = document.getElementById('map').height;
let mapaIdWidth = document.getElementById('map').width;
let telaLargura = window.innerWidth;
let telaResponsivel = 768;

document.getElementById('map').setAttribute("height", "0.5vh");
document.getElementById('map').setAttribute("width", "0.5vw");

// Função auxiliar para eventos hover
function aplicarHover(botao, corHover, corTexto) {
    botao.addEventListener('mouseover', function() {
        if (botao !== botaoAtivo) {
            botao.style.backgroundColor = corHover;
            botao.style.color = corTexto;
        }
    });
    botao.addEventListener('mouseout', function() {
        if (botao !== botaoAtivo) {
            botao.style.backgroundColor = 'white';
            botao.style.color = 'black';
        }
    });
}

// Adiciona hover a cada botão
aplicarHover(indigena, '#693434', 'white');
aplicarHover(ribeirinho, '#af8252', 'white');
aplicarHover(quilombola, '#b68042', 'white');
aplicarHover(caicara, '#d18852', 'white');
aplicarHover(kalunga, '#eed0a9', 'white');