import Board from "./board.js";
import InsertPieces from "./insertPieces.js";
import ChessRules from "./rules.js";
import WinGame from "./winGame.js";

const board = new Board();
const insertPieces = new InsertPieces();
const chessRules = new ChessRules();
const winGame = new WinGame();


//Verifica qual célula o usuário está clicando e move a peça
let inicialLevelPiece = '.a32'
export default class MovePieces {

    start(){
        board.clear();
        insertPieces.blackKing('.a7');
        insertPieces.whiteKing('.a21')
        insertPieces.whiteBishop('.a32')
    }

    move() {
        const board = document.querySelectorAll('.chess-cell');
        let lastPosition = '';
        let currentPosition = '';
        for(let i = 0; i < 64; i += 1){
            board[i].addEventListener('click', () => {
                //Varifica a localização do click atual e do click anterior
                lastPosition = currentPosition;
                if(lastPosition === undefined) {lastPosition = inicialLevelPiece};
                currentPosition = (`.a${i}`);
                console.log(`Agora ${currentPosition} / Anterior ${lastPosition}`);
                //verifica se o movimento é válido
                if(chessRules.bishop(lastPosition, currentPosition)){
                    //remove a imagem da primeira celula
                    const queenPosition = document.querySelector(lastPosition);
                    const whiteQueenImg = document.querySelector(lastPosition).querySelector('img');
                    queenPosition.removeChild(whiteQueenImg);
    
                    //Atribui a imagem na nova célula
                    insertPieces.whiteBishop(currentPosition);

                    if(winGame.levelI(currentPosition)){
                        console.log('bolinho')
                    }
                }
            })
        }
    }
}