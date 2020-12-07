
import { startGame } from './js/game.js'
const initializeGame = () => {
    document
        .getElementById("startGame")
        .onclick = () => startGame();
}

document.addEventListener('DOMContentLoaded', initializeGame);