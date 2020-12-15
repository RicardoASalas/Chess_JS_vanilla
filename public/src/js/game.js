import Table from './table/Table.js'
import { actions } from './actions/actions.js'

const startGame = () => {
    const database = firebase.database();
    let gameName = document.getElementById("gameName").value;
    let userName = document.getElementById("userName").value;
    const whiteCheckBox = document.getElementById("whiteCheckBox");
    const blackCheckBox = document.getElementById("blackCheckBox");
    gameName = gameName.replace(' ', '').toLowerCase();
    userName = userName.replace(' ', '').toLowerCase();
    console.log(gameName)
    console.log(userName)
    let userColor;
    let oponentColor;

    if (!gameName && !userName)  {
      alert('ERROR: Introduce un nombre de usuario y de juego')
      return;
    }

    if 
    ((whiteCheckBox.checked && blackCheckBox.checked) ||
     (!whiteCheckBox.checked && !blackCheckBox.checked))  {
      alert('ERROR: Selecciona un color.')
      return;
    }

    if (whiteCheckBox.checked) {
      userColor = whiteCheckBox.value;
      oponentColor = blackCheckBox.value;
    } else if (blackCheckBox.checked) {
      userColor = blackCheckBox.value;
      oponentColor = whiteCheckBox.value;
    }
    
    const gameRef = database.ref(`/games/${gameName}/`)

    gameRef.once('value').then((snapshot) => {
        const game = snapshot.val() ? snapshot.val() : {};
        let isNewGame = false;

        if (!game.users) {
          game['users'] = {};
          isNewGame = true;
        }

        if (!game['users'][userColor]){
          game['users'][userColor] = {};
          game['users'][userColor]['pieces'] = actions.createPieces(userColor);
          game.users[userColor]['username'] = userName;
        } 

        if (game['users'][userColor]['username'] !== userName) {
            alert('ERROR: No puedes unirte a este juego, está completo.')
            return;
        } else {
            let pieces = {};

            pieces[userColor] = game['users'][userColor]['pieces'];

            if (game['users'][oponentColor]) {
                pieces[oponentColor] = game['users'][oponentColor]['pieces'];
            } 

            console.log(pieces)
            
            const table = new Table();
            table.create();
            actions.setPieces(table, pieces);
            game['table'] = table.getTableState();

            localStorage.setItem('userName', JSON.stringify(userName));
            localStorage.setItem('gameName', JSON.stringify(gameName));
            localStorage.setItem('userColor', JSON.stringify(userColor))

            isNewGame ? gameRef.set(game) : gameRef.update(game);

            gameRef.on('value', (snapshot) =>{
              const game = snapshot.val();
              console.log(game)
      
              if (game && game.table) {
                  const changedTable = game.table;
    
                  if (changedTable) window.renderTable(changedTable)
              }
            });
        }
    });
}

const finishGame = () => {
  const database = firebase.database();
  console.log('terminando...')
  const gameName =JSON.parse(localStorage.getItem('gameName'));
  const gameRef = database.ref(`/games/${gameName}/`);
  gameRef.remove();
}

export { startGame, finishGame };