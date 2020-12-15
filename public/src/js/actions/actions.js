import { createPiece } from '../pieces/index.js'
import { piecesInfo } from '../pieces/info.js'

const actions = {

    /* creates two set of pieces, white and black */
    createPieces: (color) => {
        const pieces = piecesInfo;
    
        const piecesPack = {};
        const totalPieces = 16;
        
        pieces.map((piece) => {
            const { name, numPieces, originCoords } = piece;
            // clone object originCoords to avoid change original data
            let cloneOriginCoords = JSON.parse(JSON.stringify(originCoords[color]))
           
            if(numPieces > 1) {
                for (let i = 0; i < numPieces; i++) {
                    /* removes initial coords from array as it must be unique 
                    for each piece */
                    const orCoords = cloneOriginCoords.shift();
                    const completeName = name + (i + 1);
                    piecesPack[completeName] = createPiece(name, color, orCoords, completeName);
                }
            } else {
                const orCoords = cloneOriginCoords.shift();
                piecesPack[name] = createPiece(name, color, orCoords, name);
            }
        })
        const numPiecesPack = Object.keys(piecesPack).length;
      
        if (numPiecesPack > totalPieces) {
            return "ERROR: Se han creado mas piezas de las permitidas.";
        }
    
        console.log(`Piezas ${color} creadas`)
    
        return piecesPack;
    },

    /* places pieces on their initial positions */
    setPieces: (table, pieces) => {
        const  { black: blackPieces, white: whitePieces } = pieces;
       
        for (const property in blackPieces) {
            const coords = blackPieces[property]['originCoords'];
            const piece = blackPieces[property];
            table.setCellState(piece, coords)
        }
    
        for (const property in whitePieces) {
            const coords = whitePieces[property]['originCoords'];
            const piece = whitePieces[property];
            table.setCellState(piece, coords)
        }

        return table;
    },
}

/* renders table html code due to a tableState */
window.renderTable = (tableState) => {
    const userColor = JSON.parse(localStorage.getItem('userColor'));
    let image;
    let cells = '';
    let pieceImage;

    for (let i = 7; i >= 0; i--) {
        for (let j = 0; j < 8; j++) {
            const color = tableState[j][i].color;
            let state = tableState[j][i].state;
            const coords = tableState[j][i].coords;
           
            if ( color === 'white') {
                image = "blackSquare.jpg";
            } else if (color === 'black') {
                image = "whiteSquare.jpg";
            }

            let width;
            let height;
            let pieceColor;
            let draggable;
            let pieceCode;
            let pieceClass;
            const cellClass = "emptyCell";
           
            if (state.type) {
                pieceColor = state.color;
                pieceCode = pieceColor + state.numPiece;
                state = state.type;
                pieceImage =`pieces/${state}${pieceColor}.png`;
                draggable =  pieceColor !== userColor ? "false" : "true";
                pieceClass = "piece"
            } else {
                pieceImage = image;
                draggable = "false";
                pieceClass ="noPiece"
            }

            const cell = 
            `<span id="${coords}" class="cell dropzone" ondragover="onDragOver(event);" ondrop="onDrop(event);">
                    <img class=${cellClass} draggable="false" src="src/img/${image}" alt=${coords} width="${width}" height="${height}">
                    <img id="${pieceCode}" ondragstart="onDragStart(event)"; class="${pieceClass} draggable" draggable=${draggable} src="src/img/${pieceImage}" alt=${state} width="${width}" height="${height}">
            </span>`;
            cells = cells + cell;
        }
    }

    const htmlCode = 
    `<div class="table">
        ${cells}
    </div>`;
    document.getElementById('chessTable').innerHTML = htmlCode;
};


/* check correct moves for every piece type.
returns boolean */
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
            if (destX !== currX && destY !== currY ) return false;
    
            if (straigthDist > limit) return false;
    
            return true;
       
        case '*':
            if (destX !== currX && destY !== currY) {  
                if (diagonalDist > limit) return false;

                if (yDif/xDif !== 1 && yDif/xDif !== -1) return false;
            } else if (destX === currX || destY === currY) {
                if (straigthDist > limit) return false;
            } 
    
            return true;

        case '|':
            if (destX !== currX && destY === currY ) return false;

            if (straigthDist > limit || diagonalDist > limit) return false;
      
            if(orgY === 6 && currY < destY) return false;
            
            if(orgY === 1 && currY > destY) return false;
    
            return true;

        case 'x':
            if (destX === currX || destY === currY) return false;

            if (diagonalDist > limit) return false;

            if (yDif/xDif !== 1 && yDif/xDif !== -1) return false;

            return true;

        case 'L':
            if (destX === currX || destY === currY) return false;
          
            if (
                yDif/xDif !== 2
                &&
                yDif/xDif !== -2
                &&
                yDif/xDif !== 0.5
                &&
                yDif/xDif !== -0.5
                ) return false;
    
            return true;
    }
};


export { actions };