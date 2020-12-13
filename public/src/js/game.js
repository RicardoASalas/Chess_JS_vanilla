import Table from './table/Table.js'
import { actions } from './actions/actions.js'

const startGame = () => {
    const database = firebase.database();
    let gameName = document.getElementById("gameName").value;
    let userName = document.getElementById("userName").value;
    const whiteChecked = document.getElementById("whiteCheckBox").checked;
    const blackChecked = document.getElementById("blackCheckBox").checked;
    gameName = gameName.replace(' ', '');
    userName = userName.replace(' ', '');

    if (!gameName && !userName)  {
      alert('ERROR: Introduce un nombre de usuario y de juego')
      return;
    }

    if ((whiteChecked && blackChecked) || (!whiteChecked && !blackChecked))  {
      alert('ERROR: Selecciona un color.')
      return;
    }

    const userColor = whiteChecked ? 'white' : 'black';
    const gameRef = database.ref(`/games/${gameName}/`)

    gameRef.once('value').then((snapshot) => {
        const game = snapshot.val() ? snapshot.val() : {};

        if (!game.users) game.users = {};


        if (!game.users[userColor]){
            game.users[userColor] = {};
            game.users[userColor].username = userName;
        } 

        if (game.users[userColor].username !== userName) {
            alert('ERROR: No puedes unirte a este juego, está completo.')
            return;
        }

        let pieces = {};
        const colorPlayer2 =  whiteChecked ? 'black' : 'white';
        
        if (!game.users[userColor].pieces) game.users[userColor].pieces = actions.createPieces(userColor);

        if (game.users[colorPlayer2] && game.users[colorPlayer2].pieces) {
            pieces[colorPlayer2] = game.users[colorPlayer2].pieces;
        } 
        
        pieces[userColor] = game.users[userColor].pieces;
        
        console.log('Empieza el juego');
        const table = new Table();
        table.create();
        actions.setPieces(table, pieces);
        game.table = table.getTableState();
     
        localStorage.setItem('userName', JSON.stringify(userName));
        localStorage.setItem('gameName', JSON.stringify(gameName));
        localStorage.setItem('userColor', JSON.stringify(userColor))

        gameRef.set(game);
    });

    gameRef.child('table').on('value', (snapshot) =>{
        const table = snapshot.val();
        if (table) window.renderTable(table);
      });
}   

export { startGame };