
import { startGame, finishGame } from './js/game.js'
import { firebaseConfig } from './firebaseConfig.js'

const initializeGame = () => {

    firebase.initializeApp(firebaseConfig.get());

    document
        .getElementById("startGame")
        .onclick = () => startGame();

    document
        .getElementById("finishGame")
        .onclick = () => finishGame();
}

document.addEventListener('DOMContentLoaded', initializeGame);