import Board from "./board.js";
import ChessRules from "./rules.js";

const board = new Board();
const chessRules = new ChessRules();

let lastPosition;
let currentPosition;
let count = 0;

export default class Level {
    start(){
        board.draw(document.getElementById("chessboard"));
        board.clear();
        board.populate();

        const cells = document.querySelectorAll('.chess-cell');
        for(let i = 0; i < 64; i += 1){
            cells[i].addEventListener('click', () => {
                //Varifica a localização do click atual e do click anterior
                lastPosition = currentPosition;
                currentPosition = (`.a${i}`);
                //console.log(`Agora ${currentPosition} / Anterior ${lastPosition}`);

                let wingame = chessRules.canMove(lastPosition,currentPosition)
                if(wingame === undefined){wingame = ''}
                if(wingame){
                    count = Math.floor((count / 2)) + 1
                    board.clear()
                    board.win()
                    const clear = document.querySelector('body')
                    clear.innerHTML = ''
                    clear.innerHTML = `<section id='victory'>
                    <h1>Victory</h1>
                    <p>Your score was ${count} points</p>
                </section>`
                }
                else{
                    count += 1;
                }
                if(count >= 60000){
                    count = Math.floor((count / 2)) + 1
                    const clear = document.querySelector('body')
                    clear.innerHTML = ''
                    clear.innerHTML = `<section id='victory'>
                    <h1>Defeat</h1>
                    <p>Your score was ${count} points</p>
                </section>`
                }
            })
        }
     }
}  

