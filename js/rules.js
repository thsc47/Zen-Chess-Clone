export default class ChessRules {
        bishop(currentPosition,lastPosition) {
            const inicialPosition = parseInt(currentPosition.replace(/[^0-9]/g,''));
            const finalPosition = parseInt(lastPosition.replace(/[^0-9]/g,''))

            switch(true) {
                //Verifica o movimento diagonal
                case (finalPosition - inicialPosition) % 7 === 0:
                    return true
                case (finalPosition - inicialPosition) % 9 === 0:
                    return true
                default:
                    return false
            }
        }

        horse(currentPosition,lastPosition) {
            const inicialPosition = parseInt(currentPosition.replace(/[^0-9]/g,''));
            const finalPosition = parseInt(lastPosition.replace(/[^0-9]/g,''))

            switch(true) {
                case Math.abs(finalPosition - inicialPosition) === 6:
                    return true;
                case Math.abs(finalPosition - inicialPosition) === 10:
                    return true;
                case Math.abs(finalPosition - inicialPosition) === 15:
                    return true;
                case Math.abs(finalPosition - inicialPosition) === 17:
                    return true;
                default:
                    return (finalPosition - inicialPosition);
            }
        }

        king(currentPosition,lastPosition) {
            const inicialPosition = parseInt(currentPosition.replace(/[^0-9]/g,''));
            const finalPosition = parseInt(lastPosition.replace(/[^0-9]/g,''))

            switch (true){
                //verifica o movimento vertical
                case (inicialPosition + 8) === finalPosition:
                    return true;
                case (inicialPosition - 8) === finalPosition:
                    return true;
                //verifica o movimento horizontal
                case (inicialPosition + 1) === finalPosition:
                    return true;
                case (inicialPosition - 1) === finalPosition:
                    return true;
                //verifica o movimento diagonal
                case (inicialPosition + 9) === finalPosition:
                    return true;
                case (inicialPosition - 9) === finalPosition:
                    return true;
                case (inicialPosition + 7) === finalPosition:
                    return true;
                case (inicialPosition - 7) === finalPosition:
                    return true;
                default:
                    return false;   
            }
         }

        pawn(currentPosition,lastPosition) {
            const inicialPosition = parseInt(currentPosition.replace(/[^0-9]/g,''));
            const finalPosition = parseInt(lastPosition.replace(/[^0-9]/g,''))
            //verifica o movimento vertical
            if((inicialPosition - 8) === finalPosition){return true}
            else{return false}
        }
        queen(currentPosition,lastPosition) {
            const inicialPosition = parseInt(currentPosition.replace(/[^0-9]/g,''));
            const finalPosition = parseInt(lastPosition.replace(/[^0-9]/g,''))

            switch(true) {
                case ( (finalPosition - inicialPosition) % 8 ===0 ):
                    return true;
                case ((finalPosition - inicialPosition) <= 7 ||
                    (finalPosition - inicialPosition) <= -7) &&
                    Math.floor(finalPosition/10) === Math.floor(inicialPosition/10):
                    return true;
                case (finalPosition - inicialPosition) % 7 === 0:
                    return true;
                case (finalPosition - inicialPosition) % 9 === 0:
                    return true;
                default:
                    return false;
                
            }
        }

        rook(currentPosition,lastPosition) {
            const inicialPosition = parseInt(currentPosition.replace(/[^0-9]/g,''));
            const finalPosition = parseInt(lastPosition.replace(/[^0-9]/g,''))

            switch(true) {
                //verifica o movimento vertical
                case ( (finalPosition - inicialPosition) % 8 ===0 ):
                    return true;
                //verifica o movimento horizontal
                case ((finalPosition - inicialPosition) <= 7 ||
                    (finalPosition - inicialPosition) <= -7) &&
                    Math.floor(finalPosition/10) === Math.floor(inicialPosition/10):
                    return true;
                default:
                    return false;
            }
      }
}