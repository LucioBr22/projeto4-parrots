let quantidadeCartas = Number(prompt('Com quantas cartas você quer jogar? Obs.: Escolha um número par de 4 a 14'));

while (true){
    if(quantidadeCartas>=4 && quantidadeCartas<=14 && quantidadeCartas%2 ===0){
        break;
    }else{
        quantidadeCartas = Number(prompt('Com quantas cartas você quer jogar? Obs.: Escolha um número par de 4 a 14'));
    }
}

let timer = document.querySelector('.timer');
let contador = 0;

let temporizador = setInterval(() => timer.innerHTML = contador++,1000);

const conjuntoCartas = document.querySelector('.conjunto-cartas');

let listaGifs = [
    'bobrossparrot.gif',
    'bobrossparrot.gif',
    'explodyparrot.gif',
    'explodyparrot.gif',
    'fiestaparrot.gif',
    'fiestaparrot.gif',
    'metalparrot.gif',
    'metalparrot.gif',
    'revertitparrot.gif',
    'revertitparrot.gif',
    'tripletsparrot.gif',
    'tripletsparrot.gif',
    'unicornparrot.gif',
    'unicornparrot.gif'
]

listaGifs.length = quantidadeCartas;

for(let i=0;i<quantidadeCartas;i++){

    let random = (min,max) => Math.floor(Math.random()*(max - min) + min);
    let nomeDoGif = listaGifs[random(0,listaGifs.length)];
    listaGifs.splice(listaGifs.indexOf(nomeDoGif),1);
    conjuntoCartas.innerHTML = conjuntoCartas.innerHTML + `<div data-test="card" onclick='contarCartas(this)' class='cartas'><img data-test="face-down-image" class ='fundo' src='images/back.png' alt='parrot'/><img data-test="face-up-image" class ='frente' src='gifs/${nomeDoGif}' alt='${nomeDoGif}'></div>`;
}

const todasCartas = document.querySelectorAll('.cartas');

let cartaVirada = false;
let primeiraCarta;
let segundaCarta;
let gifDaPrimeiraCarta;
let gifDaSegundaCarta;
let bloquearTabuleiro = false;

function virarCarta(){
    if(bloquearTabuleiro) return;
    if(this === primeiraCarta) return;
    this.classList.add('virar');

    if(!cartaVirada){
        cartaVirada = true;
        primeiraCarta = this;
        gifDaPrimeiraCarta = primeiraCarta.querySelector('.frente');
        gifDaPrimeiraCarta = gifDaPrimeiraCarta.getAttribute('src');
        return;
    }

    segundaCarta = this;

    gifDaSegundaCarta = segundaCarta.querySelector('.frente');
    gifDaSegundaCarta = gifDaSegundaCarta.getAttribute('src');

    checarPares();
}

let f=0;

function checarPares(){
    
    if(gifDaPrimeiraCarta === gifDaSegundaCarta){
        f += 2;
        desativarCartas();
        return;
    }

    desvirarCartas();
}

function desativarCartas(){
    primeiraCarta.removeEventListener('click', virarCarta);
    segundaCarta.removeEventListener('click', virarCarta);

    resetarTabuleiro();
}

function desvirarCartas() {

    bloquearTabuleiro = true;

    setTimeout(() => {
        primeiraCarta.classList.remove('virar');
        segundaCarta.classList.remove('virar');

        resetarTabuleiro();
    }, 1000);
}

function resetarTabuleiro(){
    [cartaVirada, bloquearTabuleiro] = [false,false];
    [primeiraCarta,segundaCarta] = [null,null];
}

todasCartas.forEach(cartas => cartas.addEventListener('click',virarCarta));

let reiniciar;

function finalizarJogo(){
    setTimeout(() => {
        if(quantidadeCartas === f){
            alert(`Você ganhou em ${n} jogadas! A duração do jogo foi de ${contador-1} segundos!`);
            while(true){
                reiniciar = prompt(`Gostaria de reiniciar a partida? Obs.: Apenas sim ou não`)
                if(reiniciar === 'sim'){
                    document.location.reload(true);
                    break;
                }else if(reiniciar === 'não'){
                    clearInterval(temporizador);
                    break;
                }
            }
        }
    }, 50);
}

let n = 0;

function contarCartas(){
    n++;
    finalizarJogo();    
}
