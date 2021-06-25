//Classe para iniciar o board(vinculada ao futuro botão)
class StartGame{
    constructor(){
        let board = new Board();
        board.draw(document.getElementById("chessboard"));
        board.cells()
    }
}
//Constroi o board e nomeia cada célula
class Board{
    draw(e){
        let black = "<div class='chess-cell chess-cell-black'>";
        let white = "<div class='chess-cell chess-cell-white'>";

        for (let row = 0; row < 8; row += 1) {
            let startWithBlack = row % 2;
            for (let col = 0; col < 8; col += 1) {
                let cellType = startWithBlack ? black : white;
                startWithBlack = !startWithBlack;
                e.innerHTML += cellType;
            }
        }
    }
    cells() {
        const cellsNode = document.querySelectorAll('.chess-cell')
        for(let cells = 0; cells < 64; cells += 1) {
            cellsNode[cells].classList.add(cells)
        }
    }
}
//Inicia o nível I
class Level{
    constructor(board){

    }
}
//Inicia o Board
const startGame = document.querySelector('#start-game');
startGame.addEventListener('click', () => {
    new StartGame();
})



