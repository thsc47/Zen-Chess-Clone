//Insere as peças no Tabuleiro
export default class InsertPieces {
    //Rei Negro
    blackKing(position) {
        const blackKingCell = document.querySelector(position);
        const blackKingImg = new Image();
        blackKingImg.src = '../images/Black_king.png';
        blackKingCell.appendChild(blackKingImg);
    }
    //Rei Branco
    whiteKing(position){
        const whiteKingCell = document.querySelector(position);
        const whiteKingImg = new Image();
        whiteKingImg.src = '../images/White_king.png';
        whiteKingCell.appendChild(whiteKingImg);
    }

    //Rainha Branca
    whiteQueen(position){
         const whiteQueenCell = document.querySelector(position);
         const whiteQueenImg = new Image();
         whiteQueenImg.src = '../images/White_queen.png'
         whiteQueenCell.appendChild(whiteQueenImg);
     }

     //Rainha Negra
    blackQueen(position){
        const blackQueenCell = document.querySelector(position);
        const blackQueenImg = new Image();
        blackQueenImg.src = '../images/Black_queen.png'
        blackQueenCell.appendChild(blackQueenImg);
    }
}


