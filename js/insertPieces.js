//Insere as peças no Tabuleiro
export default class InsertPieces {
    //Rei Negro
    blackKing(position) {
        const blackKingCell = document.querySelector(position);
        const blackKingImg = new Image();
        blackKingImg.src = 'images/Black_king.png';
        blackKingCell.appendChild(blackKingImg);
    }
    //Rei Branco
    whiteKing(position){
        const whiteKingCell = document.querySelector(position);
        const whiteKingImg = new Image();
        whiteKingImg.src = 'images/White_king.png';
        whiteKingCell.appendChild(whiteKingImg);
    }

    //Rainha Branca
    whiteQueen(position){
         const whiteQueenCell = document.querySelector(position);
         const whiteQueenImg = new Image();
         whiteQueenImg.src = './images/White_queen.png'
         whiteQueenCell.appendChild(whiteQueenImg);
     }

     //Rainha Negra
    blackQueen(position){
        const blackQueenCell = document.querySelector(position);
        const blackQueenImg = new Image();
        blackQueenImg.src = './images/Black_queen.png'
        blackQueenCell.appendChild(blackQueenImg);
    }

    //Bispo Negro
    blackBishop(position){
        const blackBishopCell = document.querySelector(position);
        const blackBishopImg = new Image();
        blackBishopImg.src = '../images/Black_bishop.png'
        blackBishopCell.appendChild(blackBishopImg);
    }

    //Bispo Branco
    whiteBishop(position){
        const whiteBishopCell = document.querySelector(position);
        const whiteBishopImg = new Image();
        whiteBishopImg.src = '../images/White_bishop.png'
        whiteBishopCell.appendChild(whiteBishopImg);
    }

    //Torre Negro
    blackRook(position){
        const blackRookCell = document.querySelector(position);
        const blackRookImg = new Image();
        blackRookImg.src = '../images/Black_rook.png'
        blackRookCell.appendChild(blackRookImg);
    }
    //torre branca
    whiteRook(position){
        const whiteRookCell = document.querySelector(position);
        const whiteRookImg = new Image();
        whiteRookImg.src = '../images/White_rook.png'
        whiteRookCell.appendChild(whiteRookImg);
    }
    //
    whitePawn(position){
        const whitePawnCell = document.querySelector(position);
        const whitePawnImg = new Image();
        whitePawnImg.src = '../images/White_pawn.png'
        whitePawnCell.appendChild(whitePawnImg);
    }
    
    blackPawn(position){
        const blackPawnCell = document.querySelector(position);
        const blackPawnmg = new Image();
        blackPawnmg.src = '../images/Black_pawn.png'
        blackPawnCell.appendChild(blackPawnmg);
    }

    whiteHorse(position){
        const whiteHorseCell = document.querySelector(position);
        const whiteHorseImg = new Image();
        whiteHorseImg.src = '../images/White_horse.png'
        whiteHorseCell.appendChild(whiteHorseImg);
    }

    blackHorse(position){
        const blackHorseCell = document.querySelector(position);
        const blackHorseImg = new Image();
        blackHorseImg.src = '../images/Black_horse.png'
        blackHorseCell.appendChild(blackHorseImg);
    }
}


