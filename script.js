let quantidadeCartas = Number(prompt('Com quantas cartas você quer jogar?'));

while (true){
    if(quantidadeCartas>=4 && quantidadeCartas<=14 && quantidadeCartas%2 ===0){
        break;
    }else{
        quantidadeCartas = Number(prompt('Com quantas cartas você quer jogar?'));
    }
}

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

    conjuntoCartas.innerHTML = conjuntoCartas.innerHTML + `<div class='cartas'><img class ='fundo' src='images/back.png'/><img class ='frente' src='gifs/${nomeDoGif}'></div>`;
}

console.log(listaGifs);

const todasCartas = document.querySelectorAll('.cartas');

let virouACarta = false;

let primeiraCarta, segundaCarta;

function virarCarta(){
    this.classList.add('virar');

    if(!virouACarta){
        virouACarta = true;
        primeiraCarta = this;
    }
}

todasCartas.forEach(cartas => cartas.addEventListener('click',virarCarta));

console.log(todasCartas);