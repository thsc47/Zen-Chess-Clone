export default class ChessRules {
        bishop(currentPosition,lastPosition) {
            const inicialPosition = parseInt(currentPosition.replace(/[^0-9]/g,''));
            const finalPosition = parseInt(lastPosition.replace(/[^0-9]/g,''))

            switch(true) {
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
        }

        king(currentPosition,lastPosition) {
            const inicialPosition = parseInt(currentPosition.replace(/[^0-9]/g,''));
            const finalPosition = parseInt(lastPosition.replace(/[^0-9]/g,''))

            switch (true){
                case (inicialPosition + 8) === finalPosition:
                    return true;

                case (inicialPosition - 8) === finalPosition:
                    return true;
                case (inicialPosition + 1) === finalPosition:
                    return true;
                case (inicialPosition - 1) === finalPosition:
                    return true;
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
            if((inicialPosition - 8) === finalPosition){return true}
            else{return false}
        }
        queen(currentPosition,lastPosition) {
            const inicialPosition = parseInt(currentPosition.replace(/[^0-9]/g,''));
            const finalPosition = parseInt(lastPosition.replace(/[^0-9]/g,''))
        }

        rook(currentPosition,lastPosition) {
            const inicialPosition = parseInt(currentPosition.replace(/[^0-9]/g,''));
            const finalPosition = parseInt(lastPosition.replace(/[^0-9]/g,''))
      }
}