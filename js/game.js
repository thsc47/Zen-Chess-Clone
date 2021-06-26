import Board from "./board.js";
import InsertPieces from "./insertPieces.js";
//Verifica qual célula o usuário está clicando e move a peça
let inicialLevelPiece = '.a40'
export default class MovePieces {
    move() {
        const board = document.querySelectorAll('.chess-cell');
        let lastPosition;
        let currentPosition;
        for(let i = 0; i < 64; i += 1){
            board[i].addEventListener('click', () => {
                //localiza a localização do click atual e do click anterior
                lastPosition = currentPosition;
                if(lastPosition === undefined) {lastPosition = inicialLevelPiece};
                currentPosition = (`.a${i}`);
                console.log(`Agora ${currentPosition} / Anterior ${lastPosition}`);
                
                //remove a imagem da primeira celula
                const queenPosition = document.querySelector(lastPosition);
                const whiteQueenImg = document.querySelector(lastPosition).querySelector('img');
                queenPosition.removeChild(whiteQueenImg);

                //Atribui a imagem na nova célula
                
            })
        }
    }
}