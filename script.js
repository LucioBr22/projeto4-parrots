let quantidadeCartas = Number(prompt('Com quantas cartas você quer jogar?'));

while (true){
    if(quantidadeCartas>=4 && quantidadeCartas<=14 && quantidadeCartas%2 ===0){
        break;
    }else{
        quantidadeCartas = Number(prompt('Com quantas cartas você quer jogar?'));
    }
}

const conjuntoCartas = document.querySelector('.conjunto-cartas');

for(let i=0;i<quantidadeCartas;i++){
    conjuntoCartas.innerHTML = conjuntoCartas.innerHTML + `<div class='cartas'><img class ='fundo' src='images/back.png'/><img class ='frente' src='gifs/bobrossparrot.gif'></div>`;
}