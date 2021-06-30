import MovePieces from "./levelI.js";

//Classe para iniciar o prímeiro nível
class StartGame{
    constructor(){
        const levelI = new MovePieces()
        levelI.start()
        levelI.move()

    }
}

//Inicia o primeiro level
const startGame = document.querySelector('#start-game');
startGame.addEventListener('click', () => {
    new StartGame();
    startGame.setAttribute('hidden','hidden');
})