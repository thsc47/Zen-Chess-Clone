import Board from "./board.js";
import InsertPieces from "./insertPieces.js";
import MovePieces from "./game.js";

//Classe para iniciar o board(vinculada ao futuro botão)
class StartGame{
    constructor(){
        const board = new Board();
        const level = new InsertPieces();
        const teste = new MovePieces()
        board.draw(document.getElementById("chessboard"));
        level.blackKing('.a4');
        level.whiteKing('.a21')
        level.whiteQueen('.a40')
        teste.move()
    }
}

//Inicia o Board
const startGame = document.querySelector('#start-game');
startGame.addEventListener('click', () => {
    new StartGame();
    startGame.setAttribute('hidden','hidden');
})