
import { startGame } from './js/game.js'
import { firebaseConfig } from './firebaseConfig.js'

const initializeGame = () => {

    firebase.initializeApp(firebaseConfig.get());

    document
        .getElementById("startGame")
        .onclick = () => startGame();
}

document.addEventListener('DOMContentLoaded', initializeGame);