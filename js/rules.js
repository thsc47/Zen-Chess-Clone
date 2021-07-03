import InsertPieces from "./insertPieces.js"
import Board from "./board.js";

const board = new Board();
const insertPieces = new InsertPieces();

export default class ChessRules {
    canMove(lastPosition,currentPosition) {
        switch(true) {
            //Linha 8 - Rei Branco
            case lastPosition === '.a63':
                if((currentPosition === '.a62' &&  lastPosition === '.a63')||
                (currentPosition === '.a55' && lastPosition === '.a63') ||
                (currentPosition === '.a54' && lastPosition === '.a63')){
                    const piecePosition = document.querySelector(lastPosition);
                    piecePosition.innerHTML = '';
                    insertPieces.whiteKing(currentPosition);
                    setTimeout(function(){ 
                        board.clear();
                        board.populate(); }, 700);
                    return false;
                }
            //Linha 8 - Torre Branca
            case lastPosition === '.a60':
                 if((currentPosition === '.a56' && lastPosition === '.a60') ||
                    (currentPosition === '.a57' && lastPosition === '.a60')||
                    (currentPosition === '.a58' && lastPosition === '.a60')||
                    (currentPosition === '.a59' && lastPosition === '.a60')||
                    (currentPosition === '.a61' && lastPosition === '.a60')||
                    (currentPosition === '.a62' && lastPosition === '.a60')||
                    (currentPosition === '.a52' && lastPosition === '.a60')||
                    (currentPosition === '.a44' && lastPosition === '.a60')||
                    (currentPosition === '.a36' && lastPosition === '.a60')){
                    const piecePosition = document.querySelector(lastPosition);
                    piecePosition.innerHTML = '';
                    insertPieces.whiteRook(currentPosition);
                    setTimeout(function(){ 
                        board.clear();
                        board.populate(); }, 700);
                    return false;
                }
            //Linha 7 - Bispo Branco
            case lastPosition === '.a51':
                if((currentPosition === '.a58' && lastPosition === '.a51')||
                   (currentPosition === '.a44' && lastPosition === '.a51')||
                   (currentPosition === '.a37' && lastPosition === '.a51')||
                   (currentPosition === '.a30' && lastPosition === '.a51')||
                   (currentPosition === '.a23'&& lastPosition === '.a51')){
                    const piecePosition = document.querySelector(lastPosition);
                    piecePosition.innerHTML = '';
                    insertPieces.whiteBishop(currentPosition);
                    setTimeout(function(){ 
                        board.clear();
                        board.populate(); }, 700);
                    return false;
                   }
            //Linha 6 - Peões Branco
            case lastPosition === '.a41':
                if(currentPosition === '.a33' && lastPosition === '.a41'){
                    const piecePosition = document.querySelector(lastPosition);
                    piecePosition.innerHTML = '';
                    insertPieces.whitePawn(currentPosition);
                    setTimeout(function(){ 
                        board.clear();
                        board.populate(); }, 700);
                    return false;
                }
            case lastPosition === '.a41':
                if(currentPosition === '.a32' && lastPosition === '.a41'){
                    const piecePosition = document.querySelector(lastPosition);
                    const blackPawnPosition = document.querySelector('.a32');
                    piecePosition.innerHTML = '';
                    blackPawnPosition.innerHTML = '';
                    insertPieces.whitePawn(currentPosition);
                    setTimeout(function(){ 
                        board.clear();
                        board.populate(); }, 700);
                    return false;
                }
            case lastPosition === '.a42':
                if(currentPosition === '.a34' && lastPosition === '.a42'){
                    const piecePosition = document.querySelector(lastPosition);
                    piecePosition.innerHTML = '';
                    insertPieces.whitePawn(currentPosition);
                    setTimeout(function(){ 
                        board.clear();
                        board.populate(); }, 700);
                    return false;
                }
            //Linha 4 - Peão Branco
            case lastPosition === '.a38':
                if(currentPosition === '.a30' && lastPosition === '.a38'){
                    const piecePosition = document.querySelector(lastPosition);
                    piecePosition.innerHTML = '';
                    insertPieces.whitePawn(currentPosition);
                    setTimeout(function(){ 
                        board.clear();
                        board.populate(); }, 700);
                    return false;
                }  
            //Linha 4 - Cavalo Branco
            case lastPosition === '.a35':
                if((currentPosition === '.a52' && lastPosition === '.a35') ||
                   (currentPosition === '.a50' && lastPosition === '.a35')||
                   (currentPosition === '.a18' && lastPosition === '.a35')){
                    const piecePosition = document.querySelector(lastPosition);
                    piecePosition.innerHTML = '';
                    insertPieces.whiteHorse(currentPosition);
                    setTimeout(function(){ 
                        board.clear();
                        board.populate(); }, 700);
                    return false;
                   }
                if(currentPosition === '.a20' && lastPosition === '.a35'){
                    const piecePosition = document.querySelector(lastPosition);
                    const blackPawnPosition = document.querySelector('.a20');
                    piecePosition.innerHTML = '';
                    blackPawnPosition.innerHTML = '';
                    insertPieces.whiteHorse(currentPosition);
                    
                   board.clear()
                  
                    return true
                }  
            //Linha 1 - Torre Branca 
            case lastPosition === '.a5':
                if((currentPosition === '.a13' && lastPosition === '.a5')||
                    (currentPosition === '.a21' && lastPosition === '.a5')||
                    (currentPosition === '.a29' && lastPosition === '.a5')||
                    (currentPosition === '.a37' && lastPosition === '.a5')||
                    (currentPosition === '.a45' && lastPosition === '.a5')||
                    (currentPosition === '.a53' && lastPosition === '.a5')||
                    (currentPosition === '.a61' && lastPosition === '.a5')){
                    const piecePosition = document.querySelector(lastPosition);
                    piecePosition.innerHTML = '';
                    insertPieces.whiteRook(currentPosition);
                    setTimeout(function(){ 
                        board.clear();
                        board.populate(); }, 700);
                    return false;
                }      
        }
    }
}