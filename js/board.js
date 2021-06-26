//Classe para iniciar o board(vinculada ao futuro botão)
class StartGame{
    constructor(){
        const board = new Board();
        const level = new Pieces();
        board.draw(document.getElementById("chessboard"));
        level.LevelI();
    }
}
//Constroi o board e nomeia cada célula
class Board{
    draw(e){
        const black = "<div class='chess-cell chess-cell-black'>";
        const white = "<div class='chess-cell chess-cell-white'>";

        for (let row = 0; row < 8; row += 1) {
            let startWithBlack = row % 2;
            for (let col = 0; col < 8; col += 1) {
                let cellType = startWithBlack ? black : white;
                startWithBlack = !startWithBlack;
                e.innerHTML += cellType;
            }
        }
        for(let cells = 0; cells < 64; cells += 1) {
            document.querySelectorAll('.chess-cell')[cells].classList.add('a'+cells)
        }
    }
}
//Insere as peças no Tabuleiro
class Pieces {
    LevelI() {
        //Inserindo o Rei Negro
        const blackKingCell = document.querySelector('.a4');
        const blackKingImg = new Image();
        blackKingImg.src = '../images/Black_king.png';
        blackKingCell.appendChild(blackKingImg);

        //inserindo o Rei Branco
        const whiteKingCell = document.querySelector('.a21');
        const whiteKingImg = new Image();
        whiteKingImg.src = '../images/White_king.png';
        whiteKingCell.appendChild(whiteKingImg);

        //inserindo a Rainha Branca
        const whiteQueenCell = document.querySelector('.a40');
        const whiteQueenImg = new Image();
        whiteQueenImg.src = '../images/White_queen.png'
        whiteQueenCell.appendChild(whiteQueenImg);
    }
}

//Inicia o Board
const startGame = document.querySelector('#start-game');
startGame.addEventListener('click', () => {
    new StartGame();
})



