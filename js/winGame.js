export default class WinGame {
    levelI(currentPosition) {
        const finalPosition = parseInt(currentPosition.replace(/[^0-9]/g,''))
        let verification = finalPosition <= 3 ? true : false;
        return verification
    }
}