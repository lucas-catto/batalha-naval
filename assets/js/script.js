
var barcos = [
    'assets/img/Ship-1.png',
    'assets/img/Ship-1.png',
    'assets/img/Ship-1.png',
    
    'assets/img/Ship-2.png',
    'assets/img/Ship-2.png',
    'assets/img/Ship-2.png',

    'assets/img/Ship-3.png',
    'assets/img/Ship-3.png',
    'assets/img/Ship-3.png'
];

posicoesBarcos = [];
var posicao = 0;

function montarTabuleiro() {
    
    var linhas = ["", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    var tabela = document.getElementById('tabuleiro');
    
    var sorteio = 0;
    var c = 0;

    var elemento = "";

    linhas.forEach((letra, i) => {

        elemento = "<tr>";

        if (i == 0) {
            for (c = 0; c < 12; c++) {

                if (c == 0) {
                    elemento += `<th class='header'>${letra}</th>`;
                } else {
                    elemento += `<th class='header'>${c}</th>`;
                }
            }
        } else {
            for (c = 0; c < 12; c++) {

                if (c == 0) {
                    elemento += `<th class='header'>${letra.toUpperCase()}</th>`;
                } else {
                    elemento += `<td><img onclick='atirar(this)' name='${posicao}' src='assets/img/Fire-icon.png'></td>`;
                    posicao++;
                }
            }
        }

        elemento += "</tr>";
        tabela.innerHTML += elemento;
    });

    sortearBarcos();
}

function sortearBarcos() {

    for (let i = 0; i < 9; i++) {

        let sorteio = Math.floor(Math.random() * posicao);
        posicoesBarcos[sorteio] = barcos[i];
    }
    console.log(posicoesBarcos);
}

function atirar(img) {
    
    if (posicoesBarcos[img.name]) {
        img.src = posicoesBarcos[img.name];
        img.className = 'acertou';
    } else {
        img.src = 'assets/img/Wave.png';
        img.className = 'errou';
    }
}

montarTabuleiro();
