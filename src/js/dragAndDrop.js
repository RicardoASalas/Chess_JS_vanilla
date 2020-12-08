/* event fires when mouse drags a draggable item */
window.onDragStart = (event) => {
    const id = event.target.id;
    const color = id.search('white') > -1 ? 'white' : 'black';
    const pieceName = id.replace(color,'');
    let pieces = localStorage.getItem('pieces');
    pieces = JSON.parse(pieces);
    let piece = pieces[color][pieceName];
    piece = JSON.stringify(piece);

    event
    .dataTransfer
    .setData('piece', piece);

    event
    .currentTarget
    .style
    .backgroundColor = 'yellow';
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
    console.log('newCoords: '+newCoords)

    // const draggableElement = document.getElementById(id);
    // const dropzone = event.target;
    
    // dropzone.appendChild(draggableElement);

    // event
    // .dataTransfer
    // .clearData();
};

/* check correct moves for every piece type */
window.checkMoves = (options) => {
    const { originCoords, currCoords, destCoords, limit, moves } = options;
    const orgX = originCoords[0];
    const orgY = originCoords[1];
    const currX = currCoords[0];
    const currY = currCoords[1];
    const destX = destCoords[0];
    const destY = destCoords[1];
    const xDif = destX - currX;
    const yDif = destY - currY;
    const straigthDist = Math.sqrt(xDif * xDif + yDif * yDif);
    const cos45 = 0.707106;
    const diagonalDist = Math.ceil(straigthDist * cos45);

    switch (moves) {
        case '+': 
            if (destX !== currX && destY !== currY ) return currCoords;
    
            if (straigthDist > limit) return currCoords;
    
            return destCoords;
       
        case '*':
            if (destX !== currX && destY !== currY) {  
                if (diagonalDist > limit) return currCoords;

                if (yDif/xDif !== 1 && yDif/xDif !== -1) return currCoords
            } else if (destX === currX || destY === currY) {
                if (straigthDist > limit) return currCoords;
            } 
    
            return destCoords;

        case '|':
            if (destX !== currX) return currCoords

            if (straigthDist > limit) return currCoords;

            if(orgX === 6 && orgX < destX) return currCoords;
            
            if(orgX === 1 && orgX > destX) return currCoords;
    
            return destCoords;

        case 'x':
            if (destX === currX || destY === currY) return currCoords;

            if (diagonalDist > limit) return currCoords;

            if (yDif/xDif !== 1 && yDif/xDif !== -1) return currCoords

            return destCoords;

        case 'L':
            if (destX === currX || destY === currY) return currCoords;
            //if (xDif + yDif > limit) return currCoords;
    
            if((xDif !== 2 && yDif !== 1) || (xDif !== 1 && yDif !== 2)) return currCoords

            if (yDif/xDif !== 1 && yDif/xDif !== -1) return currCoords
    
            return destCoords;
    }
};
