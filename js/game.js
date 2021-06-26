import Board from "./board.js";
import InsertPieces from "./insertPieces.js";

export default class MovePieces {
    currentClick() {
        const board = document.querySelectorAll('.chess-cell');
        for(let i = 0; i < 64; i += 1){
            board[i].addEventListener('click', () => {
                console.log(`.a${i}`)
            })
        }
    }

}