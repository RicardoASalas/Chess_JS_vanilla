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
        const game = snapshot.val();

        if (
                game &&
                game.users &&
                game.users[userColor] &&
                game.users[userColor].username !== userName
            ) {
                alert('ERROR: No puedes unirte a este juego, está completo.')
                return;
        }

        let pieces;
        
        if (
                game &&
                game.users &&
                game.users[userColor] &&
                game.users[userColor].pieces
            ) {
                pieces = game.users[userColor].pieces
            } else {
                pieces = actions.createPieces(userColor);
            }
        
        let tableState;

        if (!game || !game.table) {
            console.log('Empieza el juego');
            const table = new Table();
            table.create();
            actions.setPieces(table, pieces);
            tableState = table.getTableState();
        } else {
            tableState = game.table;
        }
     
        localStorage.setItem('table', JSON.stringify(tableState));
        localStorage.setItem('pieces', JSON.stringify(pieces));
        const newGame = {}
        newGame.table = tableState;
        const users = {}
        users[userColor] = {
            username: userName, 
            pieces,
        }
        newGame.users = users;

        gameRef.set(newGame);
    });

    gameRef.child('table').on('value', (snapshot) =>{
        const table = snapshot.val();
        console.log(table);
        if (table) window.renderTable(table);
      });
}   

export { startGame };