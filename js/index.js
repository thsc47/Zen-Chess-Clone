class Board{
    draw(el){
        let black = "<div class='chess-cell chess-cell-black'>";
        let white = "<div class='chess-cell chess-cell-white'>";

        for (let row = 0; row < 8; row++) {
            let startWithBlack = row % 2;
            for (let col = 0; col < 8; col++) {
                let cellType = startWithBlack ? black : white;
                startWithBlack = !startWithBlack;
                el.innerHTML += cellType;
            }
        }
    }
}

let board = new Board();
board.draw(document.getElementById("chessboard"));
