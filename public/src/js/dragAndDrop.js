/* event fires when mouse drags a draggable item */
window.onDragStart = (event) => {
    const id = event.target.id;
    
    event
    .dataTransfer
    .setData('id', id);
};

/* prevents event from being droped on a non droppable container */
window.onDragOver = (event) => {
    event.preventDefault();
};

/* event fires when mouse drops an item on a droppable container */
window.onDrop = (event) => {
    const database = firebase.database();
    let gameName = localStorage.getItem("gameName");
    gameName = JSON.parse(gameName)
    let userColor = localStorage.getItem("userColor");
    userColor = JSON.parse(userColor);

    let cellCoords = event.currentTarget.id;
    cellCoords = cellCoords.split(',');
    cellCoords[0] = Number(cellCoords[0]);
    cellCoords[1] = Number(cellCoords[1]);
    
    const id = event
    .dataTransfer
    .getData('id');
    const pieceName = id.replace(userColor,'');
    const gameRef = database.ref(`/games/${gameName}/`);
    let table;

    gameRef.once('value').then((snapshot) => {
        const game = snapshot.val();

        if (!game) return;

        const piece = game['users'][userColor]['pieces'][pieceName];
        table = game['table'];
        const pieceCopy = JSON.parse(JSON.stringify(piece));
        const options = {
            originCoords: pieceCopy.originCoords,
            currCoords: pieceCopy.currentCoords,
            destCoords: cellCoords,
            limit: pieceCopy.limitCells,
            moves: pieceCopy.moves,
        }
        const isValidMove = checkMoves(options);
       
        if(cellCoords !== pieceCopy.currCoords && isValidMove) {
            
            const orgX = pieceCopy.currentCoords[0];
            const orgY = pieceCopy.currentCoords[1];
            const desX = cellCoords[0];
            const desY = cellCoords[1];

            if (!piece) return;
           
            // update piece in pieces with new current coords
            game['users'][userColor]['pieces'][pieceName]['currentCoords'] = [desX, desY];

            if (!table) return;

            // update table new coords cell with state the updated piece
            game['table'][desX][desY]['state'] = piece;
           

            // update table old coords cell with state empty
            game['table'][orgX][orgY]['state'] = 'empty';

        } else {

        }

        gameRef.update(game);
    });   
};
    

