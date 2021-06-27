export default class ChessRules {
        bishop(currentPosition,lastPosition) {
            const inicialPosition = parseInt(currentPosition.replace(/[^0-9]/g,''));
            const finalPosition = parseInt(lastPosition.replace(/[^0-9]/g,''))
        }

        horse(currentPosition,lastPosition) {
            const inicialPosition = parseInt(currentPosition.replace(/[^0-9]/g,''));
            const finalPosition = parseInt(lastPosition.replace(/[^0-9]/g,''))
        }

        king(currentPosition,lastPosition) {
            const inicialPosition = parseInt(currentPosition.replace(/[^0-9]/g,''));
            const finalPosition = parseInt(lastPosition.replace(/[^0-9]/g,''))
         }

        pawn(currentPosition,lastPosition) {
            const inicialPosition = parseInt(currentPosition.replace(/[^0-9]/g,''));
            const finalPosition = parseInt(lastPosition.replace(/[^0-9]/g,''))
            if((inicialPosition - 8) === finalPosition){return true}
            else{return  `${inicialPosition} + 8, ${finalPosition}, false`}
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