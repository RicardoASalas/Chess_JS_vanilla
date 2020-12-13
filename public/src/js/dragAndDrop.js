/* event fires when mouse drags a draggable item */
window.onDragStart = (event) => {
    const id = event.target.id;
    const database = firebase.database();
    const gameName = localStorage.getItem("gameName");
    const userColor = localStorage.getItem("userColor");

    const pieceName = id.replace(userColor,'');
    let pieces = localStorage.getItem('pieces');
    pieces = JSON.parse(pieces);
    let piece = pieces[userColor][pieceName];
    piece = JSON.stringify(piece);

    event
    .dataTransfer
    .setData('piece', piece);

    // event
    // .currentTarget
    // .style
    // .backgroundColor = 'yellow';
};

/* prevents event from being droped on a non droppable container */
window.onDragOver = (event) => {
    event.preventDefault();
};

/* event fires when mouse drops an item on a droppable container */
window.onDrop = (event) => {
    let cellCoords = event.currentTarget.id;
    cellCoords = cellCoords.split(',');
    cellCoords[0] = Number(cellCoords[0]);
    cellCoords[1] = Number(cellCoords[1]);
    let piece = event
    .dataTransfer
    .getData('piece');
    piece = JSON.parse(piece);

    const options = {
        originCoords: piece.originCoords,
        currCoords: piece.currentCoords,
        destCoords: cellCoords,
        limit: piece.limitCells,
        moves: piece.moves,
    }

    const newCoords = checkMoves(options);

    if(newCoords !== options.currCoords) {
        let pieces = localStorage.getItem('pieces');
        pieces = JSON.parse(pieces);
        let table = localStorage.getItem('table');
        table = JSON.parse(table);
        const newState = window.movePiece({table, pieces, piece, newCoords});
        table = JSON.stringify(newState.table);
        pieces = JSON.stringify(newState.pieces);
        localStorage.removeItem(table);
        localStorage.setItem('table', table);
        localStorage.removeItem(pieces);
        localStorage.setItem('pieces', pieces);
        window.renderTable(newState.table);
    }
    

    // const draggableElement = document.getElementById(id);
    // const dropzone = event.target;
    
    // dropzone.appendChild(draggableElement);

    // event
    // .dataTransfer
    // .clearData();
};
