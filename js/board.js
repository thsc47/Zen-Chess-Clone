//Constroi o board e nomeia cada célula

import InsertPieces from "./insertPieces.js";

const insertPieces = new InsertPieces();

export default class Board{
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

    clear() {
        for(let cells = 0; cells < 64; cells += 1) {
            document.querySelectorAll('.chess-cell')[cells].innerHTML = '';
        }
    }

    populate() {
        //linha 1
        insertPieces.blackRook('.a0');
        insertPieces.blackRook('.a2');
        insertPieces.blackBishop('.a4');
        insertPieces.whiteRook('.a5');
        //linha 2
        insertPieces.blackQueen('.a10');
        insertPieces.blackKing('.a14');
        insertPieces.blackPawn('.a15');
        //linha 3
        insertPieces.blackPawn('.a16');
        insertPieces.blackPawn('.a20');
        insertPieces.blackPawn('.a22');
        //linha 4 
        insertPieces.blackPawn('.a27');
        insertPieces.whitePawn('.a28');
        //LInha 5
        insertPieces.blackPawn('.a32');
        insertPieces.whiteHorse('.a35')
        insertPieces.whitePawn('.a38');
        //Linha 6
        insertPieces.whitePawn('.a41');
        insertPieces.whitePawn('.a42');
        //linha 7
        insertPieces.whiteBishop('.a51');
        //Linha 8
        insertPieces.whiteRook('.a60');
        insertPieces.whiteKing('.a63');
    }
    win(){
        //linha 1
        insertPieces.blackRook('.a0');
        insertPieces.blackRook('.a2');
        insertPieces.blackBishop('.a4');
        insertPieces.whiteRook('.a5');
        //linha 2
        insertPieces.blackQueen('.a10');
        insertPieces.blackKing('.a14');
        insertPieces.blackPawn('.a15');
        //linha 3
        insertPieces.blackPawn('.a16');
        insertPieces.whiteHorse('.a20');
        insertPieces.blackPawn('.a22');
        //linha 4 
        insertPieces.blackPawn('.a27');
        insertPieces.whitePawn('.a28');
        //LInha 5
        insertPieces.blackPawn('.a32');
        insertPieces.whitePawn('.a38');
        //Linha 6
        insertPieces.whitePawn('.a41');
        insertPieces.whitePawn('.a42');
        //linha 7
        insertPieces.whiteBishop('.a51');
        //Linha 8
        insertPieces.whiteRook('.a60');
        insertPieces.whiteKing('.a63');
    }
}