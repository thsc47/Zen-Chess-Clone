import Level from "./level.js";

//Classe para iniciar o prímeiro nível
class StartGame{
    constructor(){
        const level = new Level()
        level.start()

    }
}

//Inicia o primeiro level
const startGame = document.querySelector('#start-game');
startGame.addEventListener('click', () => {
    new StartGame();
    startGame.setAttribute('hidden','hidden');
})