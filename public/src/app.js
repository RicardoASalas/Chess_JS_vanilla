
import { startGame } from './js/game.js'
// Set the configuration for your app
  // TODO: Replace with your project's config object
  var firebaseConfig = {
    apiKey: "AIzaSyBhxbEuiKFrL3BDVSOKc_VRZmu3qRW-euY",
    authDomain: "richess-98b9a.firebaseapp.com",
    projectId: "richess-98b9a",
    storageBucket: "richess-98b9a.appspot.com",
    messagingSenderId: "432956082839",
    appId: "1:432956082839:web:841b1218de7c0db58977d2",
    measurementId: "G-DZ9XXKGY2W",
    databaseURL: "https://richess-98b9a-default-rtdb.europe-west1.firebasedatabase.app/",
  };

const initializeGame = () => {
    firebase.initializeApp(firebaseConfig);
    
    document
        .getElementById("startGame")
        .onclick = () => startGame();
}


document.addEventListener('DOMContentLoaded', initializeGame);